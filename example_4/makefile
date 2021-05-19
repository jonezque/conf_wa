# This allows you to just run the "make" command without specifying
# arguments:
.DEFAULT_GOAL := build

# Specifies which files to compile as part of the project:
CPP_FILES = $(wildcard *.c)

# Name of output (the .wasm file is created automatically):
OUTPUT_FILE = index.html

# This is the target that compiles our executable
compile: $(CPP_FILES)
	emcc webgl.c --shell-file webgl_shell.html -o $(OUTPUT_FILE)

# Removes the existing index.js and index.wasm files:
clean:

# Removes the existing files and builds the project:
build: clean compile
	@echo "Build Complete!"
