#ifndef SORT_H
#define SORT_H
#include <string>
#include <algorithm>
#include <chrono>

namespace benchmark {
    int sortArray(double *d, int size)
    {
        auto start = std::chrono::steady_clock::now();
        std::sort(d, d + size);
        auto end = std::chrono::steady_clock::now();
        std::chrono::duration<double> elapsed_seconds = end-start;
        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(elapsed_seconds).count();
        return ms;
    }

    int sortArray(int *d, int size)
    {
        auto start = std::chrono::steady_clock::now();
        std::sort(d, d + size);
        auto end = std::chrono::steady_clock::now();
        std::chrono::duration<double> elapsed_seconds = end-start;
        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(elapsed_seconds).count();
        return ms;
    }
}

#endif
