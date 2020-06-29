#include <iostream>
#include <emscripten.h>
#include <string>
using namespace std;

extern void SomeJsFunction(const char* error_message);

EM_JS(void, NoReturnValueWithNoParameters, (), {
  console.log("NoReturnValueWithNoParameters called");
});

EM_JS(double, WithParams, (int a, double b), {
  console.log("WithParams", a, b);
  return a + b;
});

int main()
{
  NoReturnValueWithNoParameters();
  auto c = WithParams(1, 2);
  cout << "WithParams result = " << c << endl;

  EM_ASM(console.log('console from main.cpp'));

  auto a = 4;
  auto b = 5;
  EM_ASM_ARGS(console.log('a = ', $0, ' b = ', $1), a, b);

  EM_ASM_ARGS(console.log('hello ' + Module.UTF8ToString($0)), "world!");

  double sum = EM_ASM_DOUBLE({
    return $0 + $1;
  }, 10.5, 20.1);
  cout << "sum = " << sum << endl;

  char* message = (char*)EM_ASM_INT({
    const msg = "string from JS";
    const byteCount = (Module.lengthBytesUTF8(msg) + 1);
    const greetingsPointer = Module._malloc(byteCount);
    Module.stringToUTF8(msg, greetingsPointer, byteCount);
    return greetingsPointer;
  });
  cout << "message = " << message << endl;
  free(message);
}