
export function getTableNo(index, paginated_data){
    return ((paginated_data.current_page - 1) * paginated_data.per_page) + index;
}