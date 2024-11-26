// დაწერეთ პროგრამა რომელიც გამოიტანს არსებული 5 ტიპის: signed char, short int, int, long int, long long int მინიმალურ და მაქსიმალურ მნიშვნელობებს

#include <stdio.h>
#include <limits.h> 

int main() {
    printf("Minimum and Maximum values of data types:\n\n");

    // Signed char
    printf("Signed char:\n");
    printf("  Min: %d\n", -128);
    printf("  Max: %d\n", 127); 
    printf("  Range: [%d, %d]\n\n", -128, 127);

    // Short int
    printf("Short int:\n");
    printf("  Min: %d\n", -32768);
    printf("  Max: %d\n", 32767); 
    printf("  Range: [%d, %d]\n\n", -32768, 32767);

    // Int
    printf("Int:\n");
    printf("  Min: %d\n", -2147483648); 
    printf("  Max: %d\n", 2147483647); 
    printf("  Range: [%d, %d]\n\n", -2147483648, 2147483647);

    // Long int
    printf("Long int:\n");
    printf("  Min: %ld\n", -2147483648L);
    printf("  Max: %ld\n", 2147483647L); 

    // Long long int
    printf("Long long int:\n");
    printf("  Min: %lld\n", -9223372036854775808LL);
    printf("  Max: %lld\n", 9223372036854775807LL); 
    printf("  Range: [%lld, %lld]\n", -9223372036854775808LL, 9223372036854775807LL);

    return 0;
}
