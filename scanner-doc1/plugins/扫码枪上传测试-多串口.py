import serial  # 导入串口通信库
import time    # 导入时间模块
def 上传数据(串口):
    # 列出可用串口（略，同前）
    try:
        # 配置串口（超时设为较短时间，如1秒，避免单次read阻塞太久）
        串口 = serial.Serial(
            port=串口,  # 默认选第一个，实际可让用户选择
            baudrate=115200,#9600   #115200
            bytesize=serial.EIGHTBITS,
            parity=serial.PARITY_NONE,
            stopbits=serial.STOPBITS_ONE,
            timeout=2  # 单次读取最长等待1秒（不影响循环总时长）
        )
        # 设置串口缓冲区大小（可选）
        串口.set_buffer_size(16 * 1024,16 * 1024)

        # 发送命令
        命令 = b"%#TXMEM"   #%#TXMEM
        print(f"发送命令: {命令.decode('ascii')}")
        串口.write(命令)

        # 循环读取数据（总等待时间10秒）
        接收到的数据 = b""
        开始时间 = time.time()
        超时时间 = 300  # 设备最多需要10秒返回数据
        最后数据时间 = time.time()  # 记录最后一次收到数据的时间
        连续无数据超时 = 2  # 如果5秒没新数据就退出

        while time.time() - 开始时间 < 超时时间:
            if 串口.in_waiting > 0:
                # 收到数据时更新最后数据时间
                最后数据时间 = time.time()
                数据 = 串口.read(串口.in_waiting)
                接收到的数据 += 数据
            else:
                # 检查是否超过连续无数据超时
                if time.time() - 最后数据时间 > 连续无数据超时:
                    print(f"连续{连续无数据超时}秒无新数据，提前退出接收循环")
                    break
                time.sleep(0.1)  # 适当降低CPU占用

        接收到的数据 = 接收到的数据.decode('utf-8').splitlines()
        
        # 检查是否超时仍未收到数据
        if not 接收到的数据:
            print("等待超时，未接收到数据！")
        else:
            a = '\n'.join(接收到的数据)
            print(f"{a}")
            print(len(接收到的数据))
            return  接收到的数据

    except Exception as 异常:
        print(f"错误: {异常}")
    finally:
        if '串口' in locals() and 串口.is_open:
            串口.close()


# 改要上传的串口
arr串口 = ["COM5"]

for 串口 in arr串口:
    print(f"串口: {串口}")
    开始时间 = time.time()
    print(f"开始时间: {time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(开始时间))}")
    上传数据(串口)
    结束时间 = time.time()
    print(f"结束时间: {time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(结束时间))}")
    耗时 = 结束时间 - 开始时间
    # 耗时减去2秒
    耗时 -= 2
    print(f"耗时: {耗时:.2f}秒")
    time.sleep(1)