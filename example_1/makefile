# This allows you to just run the "make" command without specifying
# arguments:
.DEFAULT_GOAL := build

# Specifies which files to compile as part of the project:
CPP_FILES = $(wildcard *.cpp)

# Flags to use for Emscripten emcc compile command:
FLAGS = -std=c++20 \
		--shell-file new_shell.html \
		-s EXPORTED_FUNCTIONS="['_test', '_string_test', '_int_test', '_float_test', '_array_test', '_main']" \
		-s EXPORTED_RUNTIME_METHODS="['cwrap', 'ccall']"

# Name of output (the .wasm file is created automatically):
OUTPUT_FILE = index.html

# This is the target that compiles our executable
compile: $(CPP_FILES)
	emcc shell.cpp $(FLAGS) -o $(OUTPUT_FILE)

# Removes the existing index.js and index.wasm files:
clean:
	rimraf $(OUTPUT_FILE)
	rimraf shell-test.wasm

# Removes the existing files and builds the project:
build: clean compile
	@echo "Build Complete!"
