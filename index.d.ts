export = SingleInstance
export as namespace SingleInstance;

declare namespace SingleInstance {}

declare class SingleInstance {
	constructor(appName: string, options?: SingleInstance.SingleInstanceOptions);
	lock(callback?: () => void): Promise<boolean>
	unlock(callback?: () => void): Promise<boolean>
}

declare namespace SingleInstance {
	export interface SingleInstanceOptions {
		socketPath?: string
	}
}