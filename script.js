
function but(button) {

    const action = button.getAttribute('data-action');
    
        switch (action) {
            case 'one':
                document.body.style.cursor = "url('1.png'), auto";
                break;
            case 'two':
                document.body.style.cursor = "url('2.png'), auto";
                break;
            case 'three':
                document.body.style.cursor = "url('3.png'), auto";
                break;
            // Continue cases for each action up to action13
            case 'four':
                document.body.style.cursor = "url('4.png'), auto";
                break;
                case 'five':
                    document.body.style.cursor = "url('5.png'), auto";
                    break;
                case 'six':
                    document.body.style.cursor = "url('6.png'), auto";
                    break;
                case 'seveen':
                    document.body.style.cursor = "url('7.png'), auto";
                    break;
                // Continue cases for each action up to action13
                case 'eight':
                    document.body.style.cursor = "url('8.png'), auto";
                    break;
                    case 'nine':
                        document.body.style.cursor = "url('9.png'), auto";
                        break;
                    case 'ten':
                        document.body.style.cursor = "url('10.png'), auto";
                        break;
                    case 'eleven':
                        document.body.style.cursor = "url('11.png'), auto";
                        break;
                        case 'twelve':
                            document.body.style.cursor = "url('12.png'), auto";
                            break;
                        case 'thirteen':
                            document.body.style.cursor = "url('13.png'), auto";
                            break;                    
                }
    }