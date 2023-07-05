const HTTPStatus = {
    
    messages: function (status, message = null){
        
        if(message){
            message = message[0].toUpperCase() + message.substr(1)
        }

        switch(status){
            
            case 200:
                return message ? `HTTP 200: ${message}` : 'HTTP 200: OK'

            case 201:
                return message ? `HTTP 201: ${message}` : 'HTTP 201: Created'
            
            case 400:
                return message ? `HTTP 400 (Forbiden): ${message}` : 'HTTP 400: Forbiden'

            case 401:
                return message ? `HTTP 401 (Unauthorized): ${message}` : 'HTTP 401: Unauthorized'
            
                case 403:
                    return message ? `HTTP 403 (Proibido): ${message}` : 'HTTP 403: Forbidden'

            case 404:
                return message ? `HTTP 404 (Not Found): ${message}` : 'HTTP 404: Not Found'

            case 422:
                return message ? `HTTP 422 (Unprocessable Entity): ${message}` : 'HTTP 422: Unprocessable Entity'
            
            case 500:
                return message ? `HTTP 500 (Internal Server Error): ${message}` : 'HTTP 500: Internal Server Error'
        }
    }
}

module.exports = HTTPStatus