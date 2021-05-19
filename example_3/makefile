# This allows you to just run the "make" command without specifying
# arguments:
.DEFAULT_GOAL := build

# Specifies which files to compile as part of the project:
CPP_FILES = $(wildcard src/cpp/*.cpp)

# Flags to use for Emscripten emcc compile command:
FLAGS = -std=c++20 \
	-O3 \
	-s WASM=1 \
	-s ALLOW_MEMORY_GROWTH=1 \
	-s MODULARIZE=1 \
	-s EXPORTED_FUNCTIONS="['_sortDoubleArray', '_sortIntArray', '_main','_malloc','_free']" \
	-s EXPORTED_RUNTIME_METHODS="['cwrap', 'ccall']" \
	${CPP_FILES}
# Name of output (the .wasm file is created automatically):
OUTPUT_FILE = public/sort.js

# This is the target that compiles our executable
compile: $(CPP_FILES)
	emcc $(FLAGS) -o $(OUTPUT_FILE)

# Removes the existing index.js and index.wasm files:
clean:
	rimraf public/sort.wasm
	rimraf $(OUTPUT_FILE)

# Removes the existing files and builds the project:
build: clean compile
	@echo "Build Complete!"
