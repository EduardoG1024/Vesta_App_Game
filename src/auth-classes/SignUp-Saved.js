import {supabase} from '../config/supabase-config.js';

export async function SignUpFunction (usertag, hash, status) {

    const { data, error } = await supabase
    .from('vesta_users_test')
    .select('usertag')
    .eq('usertag', usertag)

    if (data.length > 0) return false;

    const { err } = await supabase
    .from('vesta_users_test')
    .insert({ 
        usertag: usertag,
        password: hash,
        status: status,
    })

    if (err) {
        console.log(err);
        return false;
    }

    return true;
}