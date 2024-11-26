#include <stdio.h>

int power(int m, int n) {
    int z = 1; // Variable to store the result
    for (int i = 0; i < n; ++i) {
        z *= m;
    }
    return z;
}

int main() {
    int i;

    for (i = 0; i < 10; ++i) {
        int z1 = power(2, i);  // Power of 2 raised to i
        int z2 = power(2, 1);  // Power of 2 raised to 1
        int z3 = power(-3, 1); // Power of -3 raised to 1
        printf("%d %d %d\n", z1, z2, z3);
    }

    return 0;
}
