<?php

namespace App\Helper;

use Illuminate\Database\Eloquent\Model;
use Log;
use Auth;

class SMS extends Model
{
    private $api = 'globelabs';
    private $passphrase = "evPdzZUq5d";
    private $url = "";
    
    
    public function scopeSendMessage($query, $message, $mobile_no){
        $this->url = env("GLOBELABS_ENDPOINT","https://api.m360.com.ph/v3/api/globelabs/mt/Db4lf49Ci");
        $response = "";
        $sent = false;
        if($this->api == 'globelabs'){
            $http = new \GuzzleHttp\Client();
            $response = $http->post($this->url, [
                'form_params' => [
                    "app_id" => env('GLOBELABS_APP_ID'),
                    "app_secret" => env('GLOBELABS_APP_SECRET'),
                    "message" => $message,
                    "address" => substr($mobile_no, -10),
                    "passphrase" => $this->passphrase
                ]
            ]);
            $sent = true;
        }else if($this->api == 'semaphore'){
            $account = $this->checkBalance();
            $account = json_decode($account);

            if(isset($account->credit_balance) && $account->credit_balance > 0){
                $ch = curl_init();
                $parameters = array(
                    'apikey' => env('SEMAPHORE_KEY'), //Your API KEY
                    'number' => substr($mobile_no, -10),
                    'message' => $message,
                    'sendername' => env('SENDERNAME')  //iuncomment kapag production na
                );
                curl_setopt($ch, CURLOPT_URL, 'https://semaphore.co/api/v4/messages');
                curl_setopt($ch, CURLOPT_POST, 1);

                //Send the parameters set above with the request
                curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($parameters));

                // Receive response from server
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                $response = curl_exec($ch);
                curl_close($ch);
                \Log::channel('sms_logs')->info('SENT:');
                $sent = true;
            }else{
                \Log::channel('sms_logs')->info('NOT SENT:');
                $sent = false;
            }
        }

        \Log::channel('sms_logs')->info(json_encode([
            'api' => $this->api,
            'to' => substr($mobile_no, -10),
            'message' => $message,
            'auth' => Auth::check() ? Auth::id() : null,
            'response' => $response ? $response : ''
        ]));
        return $sent;
    }

    private function checkBalance(){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://semaphore.co/api/v4/account?apikey='.env('SEMAPHORE_KEY'));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($ch);
        curl_close($ch);

        \Log::channel('sms_logs')->info($output);
        return $output;
    }

    public function scopeApi(){
        return $this->api;
    }
    
    public function scopeBalance(){
        if($this->api == 'semaphore'){
            $account = $this->checkBalance();
            $account = json_decode($account);

            if(isset($account->credit_balance) && $account->credit_balance > 0){
                return $account->credit_balance;
            }
        }
        return 0;
    }
}
