import {supabase} from '../../config/supabase-config.js';

export async function SignUpFunction (usertag, hash, status) {

    const { data, error } = await supabase
    .from('vesta_users_test')
    .select('usertag')
    .eq('usertag', usertag)

    if (error) return false;
    if (data.length > 0) return false;

    const { data: user, error: userError } = await supabase
    .from('vesta_users_test')
    .insert({ 
        usertag: usertag,
        password: hash,
        status: status,
    })
    .select()
    .single()

    if (userError) {
        console.log(err);
        return false;
    }

    const { error: profileError } = await supabase
    .from('vesta_profile_test')
    .insert({ 
        user_id: user.id,
    })

    if (profileError) return false;

    return true;
}