# HF Setting
##  Module Selection

```{figure} ../../media/24NO230.png
:align: center
:width: 300px

2D Module Only
```


```{figure} ../../media/24NO232.png
:align: center
:width: 300px

2D&RFID Module
```

## Output Format
### ASCII

```{figure} ../../media/25RFIDFMT23HF0.png
:align: center
:width: 300px

`*` ASCII
```

### ASCII (LSB first)

```{figure} ../../media/25RFIDFMT23HF5.png
:align: center
:width: 300px

ASCII (LSB first)
```
### Original (Hex)

```{figure} ../../media/25RFIDFMT23HF2.png
:align: center
:width: 300px

Original (Hex)
```
### Decimal (MSB first)
```{figure} ../../media/25RFIDFMT23HF3.png
:align: center
:width: 300px

2D&RFID Module
```
### Decimal (LSB first)
```{figure} ../../media/25RFIDFMT23HF4.png
:align: center
:width: 300px

2D&RFID Module
```

```{seealso}
For example, the output is E0:00:12:34
- ASCII : E0001234
- ASCII (LSB first):  341200E0
- Original (Hex) : 0xE0,0x00,0x12,0x34
- Decimal (MSB first): HEX2DEC(0xE0001234) = 3758101044
- Decimal (LSB first):  HEX2DEC(0x341200E0) = 0873595104

```