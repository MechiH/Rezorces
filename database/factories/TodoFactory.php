<?php

namespace Database\Factories;

use App\Models\Todo;
use Illuminate\Database\Eloquent\Factories\Factory;

class TodoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Todo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $priority = ['High', 'Medium', 'Low'];
        return [
            'userId' => 1,
            'task' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'priority' => $this->faker->randomElement($priority),
            'date' => $this->faker->dateTimeBetween(Date('2021-05-02'), Date('2021-08-18')),
        ];
    }
}
