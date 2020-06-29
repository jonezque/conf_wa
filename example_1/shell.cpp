#include <emscripten.h>
#include <iostream>
#include <vector>

int main()
{
    printf("Hello World\n");
    EM_ASM(InitWrappers());
    printf("Initialization Complete\n");
}

extern "C"
{
    void test()
    {
        std::cout << "button test" << std::endl;
    }

    void int_test(int num)
    {
        std::cout << "int test " << num << std::endl;
    }

    void float_test(float num)
    {
        std::cout << "float test " << num << std::endl;
    }

    void string_test(const char *str)
    {
        std::cout << "string test " << str << std::endl;
    }

    void array_test(int* array, int arrayLength) {
        std::vector<int> vec(array, array + arrayLength);
        for(const auto item : vec) {
            std::cout << item << std::endl;
        }
    }
}
