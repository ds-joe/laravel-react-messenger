<?php

namespace Database\Factories;

use App\Models\Group;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $sender_id = fake()->randomElement([0, 1]);
        $receiver_id = null;
        $group_id = null;

        if ($sender_id == 0) {
            $receiver_id = 1;
            $sender_id = fake()->randomElement(
                User::where('id', '!=', 1)
                    ->get()
                    ->pluck('id')
                    ->toArray()
            );
        } else {
            $receiver_id = fake()->randomElement(
                User::where('id', '!=', 1)
                    ->get()
                    ->pluck('id')
                    ->toArray()
            );
        }


        if (fake()->boolean(50)) {
            $receiver_id = null;
            $group_id = fake()->randomElement(
                Group::all()
                    ->pluck('id')
                    ->toArray()
            );
            $group = Group::find($group_id);
            $sender_id = fake()->randomElement(
                $group->users
                    ->pluck('id')
                    ->toArray()
            );
        }

        return [
            'message' => fake()->realText(300),
            'sender_id' => $sender_id,
            'receiver_id' => $receiver_id,
            'group_id' => $group_id
        ];
    }
}
