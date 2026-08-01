import { supabase } from "../../config/supabase-config.js";

export async function GetAllUsers() {
    const { data, error } = await supabase
    .from('vesta_profile_test')
    .select(`
        main_character,
        role,
        level,
        current_range,
        season_high,
        other_characters,
        vesta_users_test (
        usertag
        )
    `)

    if (error) return 'Something Went Wrong';
    console.log(data);
    return data;
}