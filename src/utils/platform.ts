/**
 * 渠道枚举
 */
export enum Channel {
    weapp = 'weapp',
    h5 = 'h5'
}
/**
 * @desc 获取环境类型
 * @return 返回值  'h5' | 'weapp'
 * 这里如果直接判断CHANNEL_ENV在小程序中会报错
 */
export function getPlatform(): string {
    if (process.env.TARO_ENV === 'weapp') {
        return 'weapp'
    }
    return 'isH5'
}

export function runtime(env: Channel): boolean {
    return getPlatform() === env
}

/**
 * 是否h5环境
 */
export const isH5: boolean = runtime(Channel.h5)

/**
 * 是否小程序环境
 */
export const isWeapp: boolean = process.env.TARO_ENV === 'weapp'