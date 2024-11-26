#include <stdio.h>
#include <stdlib.h> // For exit()

int my_getchar() {
    int c = getchar();

    if (c == EOF) {
        if (ferror(stdin)) { // Check if an error occurred on input
            perror("Input error detected (ferror)");
            exit(1); // Exit with error code 1
        } else if (feof(stdin)) { // Check if EOF (end-of-file) reached
            perror("End-of-file detected (feof)");
            exit(3); // Exit with error code 3
        } else {
            perror("Unknown error in getchar");
            exit(2); // Exit with error code 2
        }
    }

    return c; // Return the valid character
}

int my_putchar(int c) {
    if (putchar(c) == EOF) {
        if (ferror(stdout)) { // Check if an error occurred on output
            perror("Output error detected (ferror)");
            exit(1); // Exit with error code 1
        } else {
            perror("Unknown error in putchar");
            exit(2); // Exit with error code 2
        }
    }

    return c; // Return the written character
}

int main() {
    int c;

    printf("Type input (Ctrl+D for EOF on Unix, Ctrl+Z on Windows):\n");

    while (1) {
        c = my_getchar(); // Get a character with error handling
        my_putchar(c);    // Output the character with error handling
    }

    return 0;
}
