#!/bin/bash

echo "Random number guesser!"                                                                       

read -p "Guess a number between 0 and 9" user_guess
function number_guess() {                                                                            
	if [ ${random_number} == ${user_guess} ]                                                        
	then                                                                                            
		echo "You Win! The random number was ${random_number}"        
	else                                                                                            
        echo "Incorrect guess. Try again."                                                        
        read -p "Guess a number between 0 and 9" user_guess
        number_guess                                                                                
    fi                                                                                              
}                                                                                                   

number_guess