<?php

namespace App\Helper;

use Illuminate\Database\Eloquent\Model;

class API extends Model
{
    /**
     * Retrieves data from given api url endpoint and parameters
     *
     * @param   string   $endpoint
     * @param   string   $params
     * @return  object
     */
    public static function fetch_data(string $endpoint, string $params = null)
    {
        $api_url = env('ACCUWEATHER_API_URL');
        $api_key = env('ACCUWEATHER_API_KEY');

        $resource_url = $api_url.$endpoint;
        $query_params = "?apikey={$api_key}";
        if($params != null)
            $query_params .= "&$params}";

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $resource_url.$query_params);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($ch);
        curl_close($ch);

        return json_decode(stripslashes($output), true);
    }
}
