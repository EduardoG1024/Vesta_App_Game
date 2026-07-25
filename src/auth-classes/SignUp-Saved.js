import {supabase} from '../config/supabase-config.js';

export async function SignUpFunction (usertag, password, status) {

    const { error } = await supabase
    .from('vesta_users_test')
    .insert({ 
        usertag: usertag,
        password: password,
        status: status,
    })

    if (error) {
        console.log(error);
        return false;
    }

    return true;
}