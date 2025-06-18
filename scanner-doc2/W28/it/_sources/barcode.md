# Symbologies

## All Symbologies

```{figure} ../../media/3030900.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/3030901.png
:align: center
:width: 300px

Enable
```


## 1D Symbologies

```{figure} ../../media/3030110.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/3030111.png
:align: center
:width: 300px

Enable
```

## 2D Symbologies

```{figure} ../../media/3030500.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/3030501.png
:align: center
:width: 300px

Enable
```

## 1D Reverse Symbologies

```{note}
- **Regular barcode**: Dark image on a bright background.
- **Inverse barcode**: Bright image on a dark background.
```

```{figure} ../../media/3030910.png
:align: center
:width: 300px

`*` Disable
```


```{figure} ../../media/3030911.png
:align: center
:width: 300px

Enable
```


## Block Barcodes With URLs
Block scanning of URL QR codes starting with `http://`, `https://`

### Disable
```{figure} ../../media/3030EA0.png
:align: center
:width: 300px

`*` Disable
```

### Enable
```{figure} ../../media/3030EA1.png
:align: center
:width: 300px

Enable
```

## UPC-A

### Enable/Disable

```{figure} ../../media/1000011.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1000010.png
:align: center
:width: 300px

`*` Enable
```

### Transmit Preamble Character
Preamble characters (country code and system characters) can be transmitted as part of the UPC-A symbology. Select one of the following options to set and transmit a UPC-A preamble to the host: Transmit system characters only, Transmit system characters and country code ("0" for the United States), or Transmit no preamble.

```{figure} ../../media/2030100.png
:align: center
:width: 300px

No System Character
```

```{figure} ../../media/2030101.png
:align: center
:width: 300px

`*` System Character
```
```{figure} ../../media/2030102.png
:align: center
:width: 300px

System Character & Country Code 
```

### Transmit Check Character

```{figure} ../../media/1020020.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1020021.png
:align: center
:width: 300px

`*` Enable
```


### 2-Digit Add-On Code

```{figure} ../../media/3030400.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030401.png
:align: center
:width: 300px

Enable
```

```{note}
- `Disable`:When the scanner scans a barcode with an additional code, it decodes the barcode and ignores the additional code. The scanner can also decode barcodes without the additional code.
- `Enable`:Scanner decodes a mix of barcodes with and without add-on codes.
```

### 5-Digit Add-On Code


```{figure} ../../media/3030410.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030411.png
:align: center
:width: 300px

Enable
```

```{note}
- `Disable`:When the scanner scans a barcode with an additional code, it decodes the barcode and ignores the additional code. The scanner can also decode barcodes without the additional code.
- `Enable`:Scanner decodes a mix of barcodes with and without add-on codes.
```

### Only decode barcodes with Add-On Code

When `Enable` is selected, the scanner will only read barcodes that contain add-on codes.

```{figure} ../../media/3030420.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030421.png
:align: center
:width: 300px

Enable
```

## UPC-E

### Enable/Disable

```{figure} ../../media/1000020.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1000021.png
:align: center
:width: 300px

`*` Enable
```

### Transmit Preamble Character
Preamble characters (country code and system characters) can be transmitted as part of the UPC-A symbology. Select one of the following options to set and transmit a UPC-A preamble to the host: Transmit system characters only, Transmit system characters and country code ("0" for the United States), or Transmit no preamble.

```{figure} ../../media/2030000.png
:align: center
:width: 300px

No System Character
```

```{figure} ../../media/2030001.png
:align: center
:width: 300px

`*` System Character
```
```{figure} ../../media/2030002.png
:align: center
:width: 300px

System Character & Country Code 
```

### Transmit Check Character

```{figure} ../../media/1020030.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1020031.png
:align: center
:width: 300px

`*` Enable
```

### Convert UPC-E to UPC-A


```{figure} ../../media/1020000.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020001.png
:align: center
:width: 300px

Enable
```

When `Enable` is selected,Converts UPC-E decoded data to UPC-A format. After conversion, the data follows the UPC-A format and is affected by UPC-A programming selections (e.g., preamble, check digit).


### 2-Digit Add-On Code

```{figure} ../../media/30303D0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/30303D1.png
:align: center
:width: 300px

Enable
```

```{note}
- `Disable`:When the scanner scans a barcode with an additional code, it decodes the barcode and ignores the additional code. The scanner can also decode barcodes without the additional code.
- `Enable`:Scanner decodes a mix of barcodes with and without add-on codes.
```

### 5-Digit Add-On Code


```{figure} ../../media/30303E0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/30303E1.png
:align: center
:width: 300px

Enable
```

```{note}
- `Disable`:When the scanner scans a barcode with an additional code, it decodes the barcode and ignores the additional code. The scanner can also decode barcodes without the additional code.
- `Enable`:Scanner decodes a mix of barcodes with and without add-on codes.
```

### Only decode barcodes with Add-On Code

When `Enable` is selected, the scanner will only read barcodes that contain add-on codes.

```{figure} ../../media/30303F0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/30303F1.png
:align: center
:width: 300px

Enable
```

### UPC-E1 Switch


```{figure} ../../media/3030150.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030151.png
:align: center
:width: 300px

Enable
```


## EAN-8

### Enable/Disable

```{figure} ../../media/1000040.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1000041.png
:align: center
:width: 300px

`*` Enable
```

### EAN-8 Extension

When `Enable` is selected, the scanner adds five leading zeros to the decoded EAN-8 barcode to extend to 13 digits.

```{figure} ../../media/1020010.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020011.png
:align: center
:width: 300px

Enable
```


### 2-Digit Add-On Code

```{figure} ../../media/3030370.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030371.png
:align: center
:width: 300px

Enable
```

```{note}
- `Disable`:When the scanner scans a barcode with an additional code, it decodes the barcode and ignores the additional code. The scanner can also decode barcodes without the additional code.
- `Enable`:Scanner decodes a mix of barcodes with and without add-on codes.
```

### 5-Digit Add-On Code


```{figure} ../../media/3030380.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030381.png
:align: center
:width: 300px

Enable
```

```{note}
- `Disable`:When the scanner scans a barcode with an additional code, it decodes the barcode and ignores the additional code. The scanner can also decode barcodes without the additional code.
- `Enable`:Scanner decodes a mix of barcodes with and without add-on codes.
```

### Only decode barcodes with Add-On Code

When `Enable` is selected, the scanner will only read barcodes that contain add-on codes.

```{figure} ../../media/3030390.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030391.png
:align: center
:width: 300px

Enable
```

### Transmit Check Character

```{figure} ../../media/3030800.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/3030801.png
:align: center
:width: 300px

`*` Enable
```



## EAN-13

### Enable/Disable

```{figure} ../../media/1000030.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1000031.png
:align: center
:width: 300px

`*` Enable
```

### 2-Digit Add-On Code

```{figure} ../../media/30303A0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/30303A1.png
:align: center
:width: 300px

Enable
```

```{note}
- `Disable`:When the scanner scans a barcode with an additional code, it decodes the barcode and ignores the additional code. The scanner can also decode barcodes without the additional code.
- `Enable`:Scanner decodes a mix of barcodes with and without add-on codes.
```

### 5-Digit Add-On Code


```{figure} ../../media/30303B0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/30303B1.png
:align: center
:width: 300px

Enable
```

```{note}
- `Disable`:When the scanner scans a barcode with an additional code, it decodes the barcode and ignores the additional code. The scanner can also decode barcodes without the additional code.
- `Enable`:Scanner decodes a mix of barcodes with and without add-on codes.
```

### Only decode barcodes with Add-On Code

When `Enable` is selected, the scanner will only read barcodes that contain add-on codes.

```{figure} ../../media/30303C0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/30303C1.png
:align: center
:width: 300px

Enable
```

### Transmit Check Character

```{figure} ../../media/3030160.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/3030161.png
:align: center
:width: 300px

`*` Enable
```

## Bookland EAN(ISBN)


### Enable/Disable

```{figure} ../../media/1000230.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1000231.png
:align: center
:width: 300px

Enable
```



## Code 128

### Enable/Disable

```{figure} ../../media/1000100.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1000101.png
:align: center
:width: 300px

`*` Enable
```

### Transmit Check Character

```{figure} ../../media/3030350.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030351.png
:align: center
:width: 300px

Enable
```

### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3118485F50000005.png
:align: center
:width: 300px

Length Of Specific Range
```


#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0118485F50000005.png
:align: center
:width: 300px

Any Length
```




## GS1-128 (UCC/EAN-128)

### Enable/Disable

```{figure} ../../media/1040330.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1040331.png
:align: center
:width: 300px

`*` Enable
```

### Transmit Check Character

```{figure} ../../media/3030360.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030361.png
:align: center
:width: 300px

Enable
```

### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3118687F50000007.png
:align: center
:width: 300px

Length Of Specific Range
```


#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0118687F50000007.png
:align: center
:width: 300px

Any Length
```

## ISBT 128

### Enable/Disable

```{figure} ../../media/1000330.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1000331.png
:align: center
:width: 300px

`*` Enable
```




## Code 39

### Enable/Disable

```{figure} ../../media/1000000.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1000001.png
:align: center
:width: 300px

`*` Enable
```

### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3010001013700000.png
:align: center
:width: 300px

Length Of Specific Range
```


#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0010001013700000.png
:align: center
:width: 300px

Any Length
```

### Check Digit Verification
When this feature is enabled, the scanner checks the integrity of all Code 39 symbologies to verify that the data complies with the specified check digit algorithm. Only Code 39 symbologies that contain a modulo 43 check digit can be decoded.

```{figure} ../../media/1020040.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020041.png
:align: center
:width: 300px

Enable
```

### Transmit Check Character

```{figure} ../../media/1020240.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020241.png
:align: center
:width: 300px

Enable
```
### Code 39 Full ASCII

```{figure} ../../media/1020110.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020111.png
:align: center
:width: 300px

Enable
```
### Transmit Start And End Characters

```{figure} ../../media/3030300.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030301.png
:align: center
:width: 300px

Enable
```

## Code 32

### Convert Code 39 To Code 32 (Italian Pharmaceutical Code)
Code 32 is a variation of Code 39 used by the Italian pharmaceutical industry. Scan the appropriate bar code below to enable or disable the conversion of Code 39 to Code 32.

```{figure} ../../media/1020300.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020301.png
:align: center
:width: 300px

Enable
```

### Code 32 Prefix
Enabling this parameter adds the prefix character "A" to all Code 32 codes. Before enabling this parameter, you must convert Code 39 to Code 32 (Italian Pharmaceutical Code)

```{figure} ../../media/1020320.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020321.png
:align: center
:width: 300px

Enable
```

### Code 32 Checksum Verification

```{figure} ../../media/3030190.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030191.png
:align: center
:width: 300px

Enable
```

### Transmit Code 32 Check Digit

```{figure} ../../media/30301A0.png
:align: center
:width: 300px

`*` Transmission Check Digit
```

```{figure} ../../media/30301A1.png
:align: center
:width: 300px

Transmission Start Character, End Character, Check Bit
```

## Code 93

### Enable/Disable

```{figure} ../../media/1000110.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1000111.png
:align: center
:width: 300px

`*` Enable
```

### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3010A0B023700011.png
:align: center
:width: 300px

Length Of Specific Range
```

#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0010A0B023700011.png
:align: center
:width: 300px

Any Length
```

## Code 11

### Enable/Disable

```{figure} ../../media/1000120.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1000121.png
:align: center
:width: 300px

Enable
```

### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3010C0D013700012.png
:align: center
:width: 300px

Length Of Specific Range
```

#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0010C0D013700012.png
:align: center
:width: 300px

Any Length
```

### Check Digit Verification
This feature allows the scanner to check the integrity of all Code 11 symbologies to verify that the data conforms to a specified check digit algorithm. This selects the check digit mechanism for the decoded Code 11 barcode. Options include checking one check digit, checking two check digits, or disabling the feature.

```{figure} ../../media/2051200.png
:align: center
:width: 300px

`*` Disable
```
```{figure} ../../media/2051201.png
:align: center
:width: 300px

One Check Digit
```
```{figure} ../../media/2051202.png
:align: center
:width: 300px

Two Check Digits
```


### Transmit Check Character

```{figure} ../../media/1020140.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020141.png
:align: center
:width: 300px

Enable
```

## Interleaved 2 of 5/ITF

### Enable/Disable

```{figure} ../../media/1000060.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1000061.png
:align: center
:width: 300px

`*` Enable
```
### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3010809024400006.png
:align: center
:width: 300px

Length Of Specific Range
```

#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0010809024400006.png
:align: center
:width: 300px

Any Length
```

### Check Digit Verification
When enabled, this parameter checks the integrity of the I 2 of 5 symbology to ensure that it complies with the specified algorithm, including USS (Uniform Symbol Specification) or OPCC (Optical Product Code Committee).

```{figure} ../../media/2051E00.png
:align: center
:width: 300px

`*` Disable
```
```{figure} ../../media/2051E01.png
:align: center
:width: 300px

Enable
```

### Transmit Check Character

```{figure} ../../media/1020210.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020211.png
:align: center
:width: 300px

Enable
```

## Discrete 2 of 5/Industrial 2 of 5/IND25

### Enable/Disable

```{figure} ../../media/1000050.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1000051.png
:align: center
:width: 300px

Enable
```
### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3010607023700005.png
:align: center
:width: 300px

Length Of Specific Range
```

#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0010607023700005.png
:align: center
:width: 300px

Any Length
```

### Check Digit Verification

```{figure} ../../media/3030480.png
:align: center
:width: 300px

`*` Disable
```
```{figure} ../../media/3030481.png
:align: center
:width: 300px

Enable
```

### Transmit Check Character

```{figure} ../../media/3030490.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030491.png
:align: center
:width: 300px

Enable
```


## Matrix 25

### Enable/Disable

```{figure} ../../media/3030200.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030201.png
:align: center
:width: 300px

Enable
```

### Check Digit Verification

```{figure} ../../media/3030210.png
:align: center
:width: 300px

`*` Disable
```
```{figure} ../../media/3030211.png
:align: center
:width: 300px

Enable
```

### Transmit Check Character

```{figure} ../../media/3030220.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030221.png
:align: center
:width: 300px

Enable
```

### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3118081F50000001.png
:align: center
:width: 300px

Length Of Specific Range
```

#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0118081F50000001.png
:align: center
:width: 300px

Any Length
```

## Standdard 25/IATA 25

### Enable/Disable

```{figure} ../../media/3030230.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030231.png
:align: center
:width: 300px

Enable
```

### Check Digit Verification

```{figure} ../../media/3030240.png
:align: center
:width: 300px

`*` Disable
```
```{figure} ../../media/3030241.png
:align: center
:width: 300px

Enable
```

### Transmit Check Character

```{figure} ../../media/3030250.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030251.png
:align: center
:width: 300px

Enable
```

### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3118283F50000003.png
:align: center
:width: 300px

Length Of Specific Range
```

#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0118283F50000003.png
:align: center
:width: 300px

Any Length
```


## Codabar

### Enable/Disable

```{figure} ../../media/1000070.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1000071.png
:align: center
:width: 300px

Enable
```

### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3010203023700007.png
:align: center
:width: 300px

Length Of Specific Range
```

#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0010203023700007.png
:align: center
:width: 300px

Any Length
```

### Check Digit Verification

```{figure} ../../media/30304C0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/30304C1.png
:align: center
:width: 300px

Enable
```



### Transmit Check Character

```{figure} ../../media/30304D0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/30304D1.png
:align: center
:width: 300px

Enable
```

### NOTIS Editing

```{figure} ../../media/1020060.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020061.png
:align: center
:width: 300px

Enable
```

#### Start And End Character Formats

```{note}
- `ABCD/ABCD` The start and end characters can be one of the following four characters: "A", "B", "C", "D";
- `ABCD/TN*E` The start character can be one of the following four characters: "A", "B", "C", "D"; the end character can be one of the following four characters: "T", "N", "*", "E".
```


```{figure} ../../media/3030310.png
:align: center
:width: 300px

`*` ABCD/ABCD
```

```{figure} ../../media/3030311.png
:align: center
:width: 300px

ABCD/TN*E 
```



#### Start And End Character Case

```{figure} ../../media/3030320.png
:align: center
:width: 300px

`*` Uppercase Letter
```

```{figure} ../../media/3030321.png
:align: center
:width: 300px

Lowercase Letters
```

## MSI/MSI Plessey
### Enable/Disable

```{figure} ../../media/1000140.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1000141.png
:align: center
:width: 300px

Enable
```

### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3010F10013700014.png
:align: center
:width: 300px

Length Of Specific Range
```

#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0010F10013700014.png
:align: center
:width: 300px

Any Length
```

### Check Digit Verification

```{figure} ../../media/1020120.png
:align: center
:width: 300px

`*` One Check Digit
```

```{figure} ../../media/1020121.png
:align: center
:width: 300px

Two Check Digits
```



### Transmit Check Character

```{figure} ../../media/1020130.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1020131.png
:align: center
:width: 300px

Enable
```

### Check Digit Algorithm
When the Two MSI Check Digits option is selected, additional verification is required to ensure integrity. Select one of the following algorithms:

```{figure} ../../media/1020230.png
:align: center
:width: 300px

MOD 10/MOD 11
```

```{figure} ../../media/1020231.png
:align: center
:width: 300px

`*` MOD 10/MOD 10
```



## GS1 DataBar/RSS

### Enable/Disable

```{figure} ../../media/1000350.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1000351.png
:align: center
:width: 300px

Enable
```

### RSS AI Character

```{figure} ../../media/3030260.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/3030261.png
:align: center
:width: 300px

`*` Enable
```

## PDF417

### Enable/Disable

```{figure} ../../media/1000170.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1000171.png
:align: center
:width: 300px

`*` Enable
```

### Regular/Inverse Decode

```{note}
- **Regular barcode**: Dark image on a bright background.
- **Inverse barcode**: Bright image on a dark background.
```

```{figure} ../../media/3030610.png
:align: center
:width: 300px

`*` Decode Regular Barcodes Only
```

```{figure} ../../media/3030611.png
:align: center
:width: 300px

Decode Inverse Barcodes Only
```

```{figure} ../../media/3030612.png
:align: center
:width: 300px

Decode Both
```

## QR Code

### Enable/Disable

```{figure} ../../media/1003250.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1003251.png
:align: center
:width: 300px

`*` Enable
```

### ECI Output

```{figure} ../../media/3030660.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030661.png
:align: center
:width: 300px

Enable
```

### Regular/Inverse Decode

```{note}
- **Regular barcode**: Dark image on a bright background.
- **Inverse barcode**: Bright image on a dark background.
```

```{figure} ../../media/3030670.png
:align: center
:width: 300px

`*` Decode Regular Barcodes Only
```

```{figure} ../../media/3030671.png
:align: center
:width: 300px

Decode Inverse Barcodes Only
```

```{figure} ../../media/3030672.png
:align: center
:width: 300px

Decode Both
```

## Data Matrix(DM)

### Enable/Disable

```{figure} ../../media/1003240.png
:align: center
:width: 300px

Disable
```

```{figure} ../../media/1003241.png
:align: center
:width: 300px

`*` Enable
```

### ECI Output

```{figure} ../../media/30306C0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/30306C1.png
:align: center
:width: 300px

Enable
```

### Regular/Inverse Decode

```{note}
- **Regular barcode**: Dark bars on a bright background.
- **Inverse barcode**: Bright bars on a dark background.
```

```{figure} ../../media/30306B0.png
:align: center
:width: 300px

`*` Decode Regular Barcodes Only
```

```{figure} ../../media/30306B1.png
:align: center
:width: 300px

Decode Inverse Barcodes Only
```

```{figure} ../../media/30306B2.png
:align: center
:width: 300px

Decode Both
```

## Maxi Code

### Enable/Disable

```{figure} ../../media/1003260.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1003261.png
:align: center
:width: 300px

Enable
```

## Aztec Code

### Enable/Disable

```{figure} ../../media/1003280.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/1003281.png
:align: center
:width: 300px

Enable
```



## Han Xin COde

### Enable/Disable

```{figure} ../../media/10032F0.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/10032F1.png
:align: center
:width: 300px

Enable
```

### Regular/Inverse Decode

```{note}
- **Regular barcode**: Dark image on a bright background.
- **Inverse barcode**: Bright image on a dark background.
```

```{figure} ../../media/3030710.png
:align: center
:width: 300px

`*` Decode Regular Barcodes Only
```

```{figure} ../../media/3030711.png
:align: center
:width: 300px

Decode Inverse Barcodes Only
```

```{figure} ../../media/3030712.png
:align: center
:width: 300px

Decode Both
```

## ISSN

### Enable/Disable

Convert to EAN13 when disabled

```{figure} ../../media/3030330.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030331.png
:align: center
:width: 300px

Enable
```

## NEC-25(COOP25)

### Enable/Disable

```{figure} ../../media/3030450.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030451.png
:align: center
:width: 300px

Enable
```

### Enable/Disable

```{figure} ../../media/3030200.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030201.png
:align: center
:width: 300px

Enable
```

### Check Digit Verification

```{figure} ../../media/3030460.png
:align: center
:width: 300px

`*` Disable
```
```{figure} ../../media/3030461.png
:align: center
:width: 300px

Enable
```

### Transmit Check Character

```{figure} ../../media/3030470.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030471.png
:align: center
:width: 300px

Enable
```

### Set Length Range
The length of a barcode refers to the number of characters (i.e. human-readable characters) contained in the barcode, including the check digit. The length of a barcode can be set to any length, within a specific range.

```{note}
When setting lengths, single digit numbers must always be preceded by a leading zero.
```

#### Length Of Specific Range
Allows reading of barcodes with a specific length. First scan the barcode with a length within a specific range, then scan the 4-digit setting code in the [appendix](#digital-barcode) to set the corresponding two lengths L1 and L2. L1 and L2 each occupy a two-digit setting code, and any digits less than 2 are padded with 0,setting range: 01-99.
- When L1 < L2, L1 is the minimum length and L2 is the maximum length.
- When L1 > L2, L1 is the maximum length and L2 is the minimum length.
- When L1 = L2, only the fixed length (L1/L2) is read

```{tip}
- Only 4-8 characters are allowed to be read, so scan the [digital setting code](#digital-barcode) "0" "4" "0" "8" or "0" "8" "0" "4"
- To read only 12 characters, scan the [digital setting code](#digital-barcode) "1" "2" "1" "2"
```

```{figure} ../../media/F3118889F50000009.png
:align: center
:width: 300px

Length Of Specific Range
```

#### Any Length
To read barcodes of any length, just scan any length without scanning the digital setting code. Default: 0-99

```{figure} ../../media/F0118889F50000009.png
:align: center
:width: 300px

Any Length
```

## COMPOSITE

### Enable/Disable

```{figure} ../../media/3030170.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030171.png
:align: center
:width: 300px

Enable
```

## Brazil Bank Code


```{figure} ../../media/3030510.png
:align: center
:width: 300px

`*` Disable
```

```{figure} ../../media/3030511.png
:align: center
:width: 300px

Enable
```


## Digital Barcode


```{figure} ../../media/A0.png
:align: center
:width: 300px

0
```
```{figure} ../../media/A1.png
:align: center
:width: 300px

1
```
```{figure} ../../media/A2.png
:align: center
:width: 300px

2
```
```{figure} ../../media/A3.png
:align: center
:width: 300px

3
```
```{figure} ../../media/A4.png
:align: center
:width: 300px

4
```
```{figure} ../../media/A5.png
:align: center
:width: 300px

5
```
```{figure} ../../media/A6.png
:align: center
:width: 300px

6
```
```{figure} ../../media/A7.png
:align: center
:width: 300px

7
```
```{figure} ../../media/A8.png
:align: center
:width: 300px

8
```
```{figure} ../../media/A9.png
:align: center
:width: 300px

9
```
```{figure} ../../media/A-.png
:align: center
:width: 300px

Cancel
```
