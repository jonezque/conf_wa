#include <iostream>
#include "sort.hpp"

extern "C" {
    int sortDoubleArray(double *d, int size) {
        return benchmark::sortArray(d, size);
    }

    int sortIntArray(int *i, int size) {
        return benchmark::sortArray(i, size);
    }
}

int main () {
    std::cout << "Hello React" << std::endl;
}