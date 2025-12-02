#include <gpiod.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    if (argc != 3) {
        fprintf(stderr, "Usage: %s <LINE_OFFSET> <VALUE>\n", argv[0]);
        fprintf(stderr, "VALUE: 0 (low) or 1 (high)\n");
        return 1;
    }

    int line_offset = atoi(argv[1]);
    int value       = atoi(argv[2]);

    if (value != 0 && value != 1) {
        fprintf(stderr, "Error: VALUE must be 0 or 1\n");
        return 1;
    }

    struct gpiod_chip *chip = gpiod_chip_open_by_name("gpiochip3");
    if (!chip) {
        perror("gpiod_chip_open_by_name");
        return 1;
    }

    struct gpiod_line *line = gpiod_chip_get_line(chip, line_offset);
    if (!line) {
        perror("gpiod_chip_get_line");
        gpiod_chip_close(chip);
        return 1;
    }

    if (gpiod_line_request_output(line, "gpio_set", value) < 0) {
        perror("gpiod_line_request_output");
        gpiod_chip_close(chip);
        return 1;
    }

    gpiod_line_release(line);
    gpiod_chip_close(chip);

    return 0;
}

