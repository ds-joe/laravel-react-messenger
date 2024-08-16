<?php

namespace App\Http\Requests\Dashboard\Chat;

use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
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
        return [
            'message' => "sometimes|nullable|string",
            'attachments' => "sometimes|array",
            'attachments.*' => 'file|max:10240', // max 10 MB for file,
            'group_id' => "sometimes|nullable|numeric|exists:groups,id",
            'receiver_id' => 'sometimes|nullable|numeric|exists:users,id'
        ];
    }
}
