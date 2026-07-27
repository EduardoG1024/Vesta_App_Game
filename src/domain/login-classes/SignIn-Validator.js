import bcrypt from 'bcrypt';
import { supabase } from '../../config/supabase-config.js';

export async function SignInBcrypt(usertag, password) {

    const {data, error} = await supabase
    .from('vesta_users_test')
    .select('usertag, password')
    .eq( 'usertag', usertag )
    .single()

    if(error) return false;

    return await bcrypt.compare(password, data.password);
}