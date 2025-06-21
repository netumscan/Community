# Terminator

## End Character Settings
The end character is added after the decoded data in the format of decoded data + end character.

### No End Character

```{figure} ../../media/3030050.png
:align: center
:width: 300px

No End Character
```


### Enter+New Line(CRLF)

```{figure} ../../media/3030051.png
:align: center
:width: 300px

Enter+New Line(CRLF)
```


### Enter(CR)

```{figure} ../../media/3030052.png
:align: center
:width: 300px

`*` Enter(CR)
```


### Tab(TAB)

```{figure} ../../media/3030053.png
:align: center
:width: 300px

Tab(TAB)
```


### Enter+Enter(CRCR)

```{figure} ../../media/3030054.png
:align: center
:width: 300px

Enter+Enter(CRCR)
```


## Transmit Code ID Character
A code ID character identifies the code type of a scanned bar code. This can be useful when decoding more than one code type. The code ID character is inserted between the prefix character (if selected) and the decoded symbol.


```{figure} ../../media/2051700.png
:align: center
:width: 300px

`*` None
```

```{figure} ../../media/2051701.png
:align: center
:width: 300px

AIM ID
```

```{figure} ../../media/2051702.png
:align: center
:width: 300px

Code ID
```

### Code ID Identifiers

```{raw} html
<iframe src="../../plugins/212-codeid.html" style="height:800px; width:100%; border:none;"></iframe>
```

### AIM Code Identifiers


Each AIM Code Identifier contains the three-character string ]cm where: <br>
- ] = Flag Character
- c =Code Character (see table)
- m= Modifier Character

```{raw} html
<iframe src="../../plugins/212-aimid.html" style="height:800px; width:100%; border:none;"></iframe>
```