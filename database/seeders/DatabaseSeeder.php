<?php

namespace Database\Seeders;

use App\Models\Conversation;
use App\Models\User;
use App\Models\Group;
use App\Models\Message;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        # Create admin user
        User::factory()->create([
            'name' => 'Youssef Bibawy',
            'email' => "youssefbibawy@gmail.com",
            'email_verified_at' => now(),
            'password' => Hash::make('123123123'),
            'is_admin' => true
        ]);

        # Create random fake users.
        User::factory(9)->create();

        # Create groups and insert users inside it.
        for ($i = 0; $i < 9; $i++) {
            $group = Group::factory()->create([]);

            $group->users()->attach(
                User::inRandomOrder()
                    ->limit(rand(2, 5))
                    ->get()
                    ->pluck('id')
                    ->toArray()
            );
        }

        # Create Messages
        Message::factory(200)->create([]);

        # Create Conversions
        $conversionsMessages = Message::whereNull('group_id')->get();
        $conversions =  $conversionsMessages->groupBy(function ($message) {
            return collect([$message->sender_id, $message->receiver_id])
                ->sort()
                ->implode("_");
        })->map(function ($groupedMessage) {
            $lastMessage = $groupedMessage->last();
            return [
                'user_id1' => $lastMessage->sender_id,
                'user_id2' => $lastMessage->receiver_id,
                'last_message_id' => $lastMessage->id
            ];
        })->values();

        # Create conversions
        Conversation::insertOrIgnore($conversions->toArray());
    }
}
