<?php

namespace Database\Factories;

use App\Models\goals;
use Illuminate\Database\Eloquent\Factories\Factory;

class goalsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = goals::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'userId' => 1,
            'title' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'description' => $this->faker->sentence($nbWords = 26, $variableNbWords = true),
            'date' => $this->faker->dateTimeBetween(Date('2021-05-02'), Date('2021-08-18')),
        ];
    }
}
