# 蓝牙模式


```{figure} ../../media/2523IFSNO244.png
:align: center
:width: 300px

蓝牙模式
```

- 扫描蓝牙模式，再按一下按键启动，即可切换到蓝牙传输，打开蓝牙搜索设备进行配对，配对成功就可以通过蓝牙传输数据。
- 蓝牙名称：`barcode scanner`或者`NETUM Bluetooth`
- 切换到蓝牙模式，蓝色指示灯会亮。


```{note}
蓝灯代表的意思是。  
①蓝灯闪烁，代表未连接。  
②蓝灯常亮，代表已连接。  
```


## 蓝牙HID

```{figure} ../../media/AT2BMODE3D2.png
:align: center
:width: 300px

蓝牙HID`默认`
```

 ## 蓝牙SPP

```{figure} ../../media/AT2BMODE3D1.png
:align: center
:width: 300px

蓝牙SPP
```

## 蓝牙BLE

```{figure} ../../media/AT2BMODE3D3.png
:align: center
:width: 300px

蓝牙BLE
```

```{note}
蓝牙SPP和蓝牙BLE是软件对接使用的模式，如果需要通过系统蓝牙搜索配对，需要使用[蓝牙HID](#蓝牙hid)
```
## 清除配对信息

```{figure} ../../media/2525ALL-CH.png
:align: center
:width: 300px

清除配对信息
```

```{note}
重新配对新的设备、或者配对不上可以扫描该设置码重新配对
```

## iOS弹出/隐藏键盘
```{figure} ../../media/25250S.png
:align: center
:width: 300px

iOS弹出/隐藏键盘
```

```{note}
也可以在不扫码情况下，连续按两次扫描键弹出/隐藏键盘，这个功能只支持IOS系统蓝牙配对使用
```

## 蓝牙键盘传输速度


```{figure} ../../media/AT2BHIDDLY.png
:align: center
:width: 300px

获取蓝牙键盘传输速度
```
### 高速

```{figure} ../../media/AT2BHIDDLY3D2.png
:align: center
:width: 300px

高速
```

### 中速

```{figure} ../../media/AT2BHIDDLY3D10.png
:align: center
:width: 300px

中速
```

### 低速
```{figure} ../../media/AT2BHIDDLY3D25.png
:align: center
:width: 300px

低速
```

## 修改蓝牙名称
```{raw} html
    <iframe src="../../plugins/scan-bluetoothname.html" height="600px" width="100%"></iframe>

```