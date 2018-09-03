package com.myreactnativeproject.module;

import android.app.Activity;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

public class ToastExample extends ReactContextBaseJavaModule {
    public static final String LONG_TIME = "LONG";
    public static final String SHORT_TIME = "SHORT";
    public static final String MESSAGE = "MESSAGE";

    public ToastExample(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * 该方法的返回值是在RN中需要这个值来调用该类的方法
     * @return
     */
    @Override
    public String getName() {
        return "ToastForAndroid";
    }

    /**
     * 注解@ReactMethod表示这个方法可以被RN调用
     * @param callback
     */
    @ReactMethod
    public void getDataFromIntent(Callback callback){
        try {
            Activity currentActivity = getCurrentActivity();
            String result = currentActivity.getIntent().getStringExtra("data");
            if (TextUtils.isEmpty(result)){
                callback.invoke("哈哈哈启动时传过来的");
            }else {
                callback.invoke(result);
            }
        }catch (Exception e){
            Log.e("rn","报错了"+e.getMessage());
            callback.invoke("error");
        }

    }

    @Override
    public Map<String,Object> getConstants(){
        //让js那边能够使用这些常量
        Map<String,Object> constans = new HashMap<>();
        constans.put(LONG_TIME, Toast.LENGTH_LONG);
        constans.put(SHORT_TIME, Toast.LENGTH_SHORT);
        constans.put(MESSAGE, "这是MESSAGE的值");
        return constans;
    }

    @ReactMethod
    public void  show(int duration){
        Toast.makeText(getReactApplicationContext(), "message:"+duration,duration).show();
    }

    @ReactMethod
    public void sendEvent(){
        onScanningResult();
    }

    private void onScanningResult() {
        WritableMap params = Arguments.createMap();
        params.putString("Key","myData");
        sendEvent(getReactApplicationContext(),"EventName",params);
    }

    @ReactMethod
    public void testAndroidCallbackMethod(String msg,Callback callback){
        
        Toast.makeText(getReactApplicationContext(), msg, Toast.LENGTH_LONG).show();
        callback.invoke("abc");
    }

    @ReactMethod
    public void testAndroidPromiseMethod(String msg, Promise promise){
        Toast.makeText(getReactApplicationContext(), msg, Toast.LENGTH_SHORT).show();
        String result = "高娟娟";
        promise.resolve(result);
    }


    private void sendEvent(ReactApplicationContext reactContext, String eventName, WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName,params);
    }

    public void nativeCallRn(){
        onScanningResult();
    }
    @Override
    public boolean canOverrideExistingModule() {
        return true;
    }
}
