<?php

namespace Database\Factories;

use App\Models\Notes;
use Illuminate\Database\Eloquent\Factories\Factory;

class NotesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Notes::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'userId' => 1,
            'title' => $this->faker->sentence($nbWords = 6, $variableNbWords = true) ,
            'content' => $this->faker->paragraph($nbSentences = 50, $variableNbSentences = true),
            'tag' => $this->faker->sentence($nbWords = 1),
        ];
    }
}
