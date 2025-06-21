# Data Editing

## Output Format
To change the Scan Data Transmission Format, scan one of the eight bar codes corresponding to the desired format.


### Default output format
```{figure} ../../media/24DATA230.png
:align: center
:width: 300px
:name: default-output-format-figure

`*` Default output format
```

### Enable Suffix output

```{figure} ../../media/24DATA231.png
:align: center
:width: 300px
:name: enable-suffix-output-figure

Enable Suffix output
```

### Enable Prefix output

```{figure} ../../media/24DATA232.png
:align: center
:width: 300px
:name: enable-prefix-output-figure

Enable Prefix output
```

### Enable Hide Barcode Start Char

```{figure} ../../media/24DATA235.png
:align: center
:width: 300px
:name: enable-hide-barcode-start-char-figure

Enable Hide Barcode Start Char
```

### Enable Hide Barcode Middle Char

```{figure} ../../media/24DATA234.png
:align: center
:width: 300px
:name: enable-hide-barcode-middle-char-figure

Enable Hide Barcode Middle Char
```

### Enable Hide Barcode End Char

```{figure} ../../media/24DATA233.png
:align: center
:width: 300px
:name: enable-hide-barcode-end-char-figure

Enable Hide Barcode End Char
```

## Prefix

### Add Prefix

```{figure} ../../media/24SCAN232.png
:align: center
:width: 300px
:name: add-prefix-figure

Add Prefix
```

### Clear All Prefix
```{figure} ../../media/24SCAN234.png
:align: center
:width: 300px
:name: clear-all-prefix-figure

Clear All Prefix
```

### Operation Steps

- Step 1. If prefix output is not enabled, you can enable it by setting the [output format](#enable-prefix-output-figure);
- Step 2. If you have set a prefix before, the new prefix will be after the previously added prefix. If you want to discard the previous content and set it again, please scan "[Clear Prefix](#clear-all-prefix-figure)" first, and then perform the following adding actions;
- Step 3. Scan to [add prefix](#add-prefix-figure)
- Setp 4. Determine the two-digit hexadecimal value of the prefix character to be added; refer to the [ASCII Chars Table](#ascii-chars-table)
- setp 5. Scan the [digital setting code](#numeric-bar-codes): scan the hexadecimal high value, then scan the low value;
- setp 6. Repeat steps 4 and 5 to add the next character.

```{note}
- e.g. Want to add "Ctrl+A" as prefix, Scan '[add prefix](#add-prefix-figure)', '[9](#numeric-bar-codes-9)','[7](#numeric-bar-codes-7)','[4](#numeric-bar-codes-4)','[1](#numeric-bar-codes-1)'.
```

## Suffix
### Add Suffix
```{figure} ../../media/24SCAN231.png
:align: center
:width: 300px
:name: add-suffix-figure

Add Suffix
```
### Clear All Suffix
```{figure} ../../media/24SCAN233.png
:align: center
:width: 300px
:name: clear-all-suffix-figure

Clear All Suffix
```

### Operation Steps

- Step 1. If suffix output is not enabled, you can enable it by setting the [output format](#enable-suffix-output-figure);
- Step 2. If you have set a suffix before, the new suffix will be placed after the previously added suffix. If you need to discard the previous content and set it again, please scan "[Clear suffix](#clear-all-suffix-figure)" first, and then perform the following addition operations;
- Step 3. Scan to [add suffix](#add-suffix-figure);
- Setp 4. Determine the two-digit hexadecimal value of the suffix character to be added; refer to the [ASCII character table](#ascii-chars-table);
- setp 5. Scan the [digital setting code](#numeric-bar-codes): scan the hexadecimal high value, then scan the low value;
- setp 6. Repeat steps 4 and 5 to add the next character.

```{note}
- e.g. Want to add "Ctrl+Alt+A" as surffix, Scan '[add suffix](#add-suffix-figure)', '[9](#numeric-bar-codes-9)', '[7](#numeric-bar-codes-7)', '[9](#numeric-bar-codes-9)', '[9](#numeric-bar-codes-9)', '[4](#numeric-bar-codes-4)', '[1](#numeric-bar-codes-1)'.
```


## Hide Set
### Hide Barcode Start Chars
```{figure} ../../media/24SCAN235.png
:align: center
:width: 300px
:name: hide-barcode-start-chars-figure

Hide Barcode Start Chars
```
### Hide Barcode Middle Char Start
```{figure} ../../media/24SCAN236.png
:align: center
:width: 300px
:name: hide-barcode-middle-char-start-figure

Hide Barcode Middle Char Start
```
### Hide Barcode Middle Chars
```{figure} ../../media/24SCAN237.png
:align: center
:width: 300px
:name: hide-barcode-middle-chars-figure

Hide Barcode Middle Chars
```
### Hide Barcode End Chars
```{figure} ../../media/24SCAN238.png
:align: center
:width: 300px
:name: hide-barcode-end-chars-figure

Hide Barcode End Chars
```

### Operation Steps
- Step 1. Scan the Hide Barcode [Start](#hide-barcode-start-chars-figure) / [Middle Start](#hide-barcode-middle-char-start-figure) / [Middle length](#hide-barcode-middle-chars-figure) / [End](#hide-barcode-end-chars-figure) Chars symbol.
- Step 2. Determine the hex value for the length you wish to enter(hide 4 chars, scan [0](#numeric-bar-codes-0),[4](#numeric-bar-codes-4);  hide 12 chars, scan [0](#numeric-bar-codes-0),[C](#numeric-bar-codes-c)).
- Step 3. Scan the 2 digit hex value from the Programming Chart.
- Step 4. Scan the output format [Start](#enable-hide-barcode-start-char-figure)/[Middle](#enable-hide-barcode-middle-char-figure)/[End](#enable-hide-barcode-end-char-figure) to enable or [cancel hide char](#default-output-format-figure) function.

## Quick Setup

### Add Prefix

```{raw} html
<iframe src="../../plugins/edit-addprefix1.html" style="height:500px; width:100%; border:none;"></iframe>
```

```{tip}
- Special characters need to be processed in hexadecimal format, and `\x` is added in front of the hexadecimal content to indicate the hexadecimal format.
- Please refer to the [ASCII character table](#ascii-chars-table) for specific characters converted into hexadecimal characters.
- Example: To add a 0x03 to the content, the input content should be: \x03
```


### Add Suffix

```{raw} html
<iframe src="../../plugins/edit-addsuffix.html" style="height:500px; width:100%; border:none;"></iframe>
```



```{tip}
- Special characters need to be processed in hexadecimal format, and `\x` is added in front of the hexadecimal content to indicate the hexadecimal format.
- Please refer to the [ASCII character table](#ascii-chars-table) for specific characters converted into hexadecimal characters.
- Example: To add a 0x03 to the content, the input content should be: \x03
```

### Hide Barcode Start Content

```{raw} html
<iframe src="../../plugins/edit-hidestart.html" style="height:500px; width:100%; border:none;"></iframe>
```

### Hide Barcode Middle Content

```{raw} html
<iframe src="../../plugins/edit-hidemiddle.html" style="height:600px; width:100%; border:none;"></iframe>
```

### Hide Barcode End Content

```{raw} html
<iframe src="../../plugins/edit-hideend.html" style="height:500px; width:100%; border:none;"></iframe>
```

### Replace Barcode Content
```{raw} html
<iframe src="../../plugins/edit-replace.html" style="height:600px; width:100%; border:none;"></iframe>
```

```{tip}
- Special characters need to be processed in hexadecimal format, and `\x` is added in front of the hexadecimal content to indicate the hexadecimal format.
- Please refer to the [ASCII character table](#ascii-chars-table) for specific characters converted into hexadecimal characters.
- Example: To add a 0x03 to the content, the input content should be: \x03
```


## Appendix

### Numeric Bar Codes


```{figure} ../../media/24NO230.png
:align: center
:width: 300px
:name: numeric-bar-codes-0

0
```

```{figure} ../../media/24NO231.png
:align: center
:width: 300px
:name: numeric-bar-codes-1

1
```

```{figure} ../../media/24NO232.png
:align: center
:width: 300px
:name: numeric-bar-codes-2

2
```

```{figure} ../../media/24NO233.png
:align: center
:width: 300px
:name: numeric-bar-codes-3

3
```

```{figure} ../../media/24NO234.png
:align: center
:width: 300px
:name: numeric-bar-codes-4

4
```

```{figure} ../../media/24NO235.png
:align: center
:width: 300px
:name: numeric-bar-codes-5

5
```

```{figure} ../../media/24NO236.png
:align: center
:width: 300px
:name: numeric-bar-codes-6

6
```

```{figure} ../../media/24NO237.png
:align: center
:width: 300px
:name: numeric-bar-codes-7

7
```

```{figure} ../../media/24NO238.png
:align: center
:width: 300px
:name: numeric-bar-codes-8

8
```

```{figure} ../../media/24NO239.png
:align: center
:width: 300px
:name: numeric-bar-codes-9

9
```

```{figure} ../../media/24NO23A.png
:align: center
:width: 300px
:name: numeric-bar-codes-a

A
```

```{figure} ../../media/24NO23B.png
:align: center
:width: 300px
:name: numeric-bar-codes-b

B
```

```{figure} ../../media/24NO23C.png
:align: center
:width: 300px
:name: numeric-bar-codes-c

C
```

```{figure} ../../media/24NO23D.png
:align: center
:width: 300px
:name: numeric-bar-codes-d

D
```

```{figure} ../../media/24NO23E.png
:align: center
:width: 300px
:name: numeric-bar-codes-e

E
```

```{figure} ../../media/24NO23F.png
:align: center
:width: 300px
:name: numeric-bar-codes-f

F
```

### ASCII Function Key Table

```{raw} html
<iframe src="../../plugins/edit-asciikeys.html" style="height:800px; width:100%; border:none;"></iframe>
```

### ASCII Chars Table
```{raw} html
<iframe src="../../plugins/edit-asciichars.html" style="height:800px; width:100%; border:none;"></iframe>
```