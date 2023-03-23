import axios from 'axios';
import Cookies from 'js-cookie';

function Menu() {
    let localAccountUUID = Cookies.get('gat_account_uuid');
    axios.get(
        'https://api.ga.tech/account?id=' + localAccountUUID,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // CSRF Token storaged in DOM
                'X-CSRF-Token': (document.querySelector('meta[name="csrf-token"]') as Element).getAttribute('content'),
            },
        }
        ).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        }
    )
}