<?php

namespace App\Http\Requests\Dashboard\Settings;

use App\Facade\Storage;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UserInformationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $id = Auth::user()->id;
        $avatarRules = Storage::getRules()['image'];
        return [
            'full_name' => "required|string|max:255",
            'email' => "required|email|unique:users,email,{$id}",
            'phone' => "required|numeric|unique:users,phone,{$id}",
            'password' => "sometimes|nullable|string|same:confirm_password",
            'avatar' => "sometimes|nullable|max:{$avatarRules['max']}|mimes:{$avatarRules['types']}",
            'confirm_password' => "sometimes"
        ];
    }
}
