help:
	@echo "Makefile to ease the dev process"
	@echo "Usage:"
	@echo "      make tailwind			Compile tailwind files."

tailwind:
	npx @tailwindcss/cli -i ./src/input.css -o ./static/css/ruckenwind.css --watch