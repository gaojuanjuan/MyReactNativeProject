package com.myreactnativeproject.reactpackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.myreactnativeproject.module.ToastExample;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ExampleReactNativePackage implements ReactPackage {

    private ToastExample mToastExample;

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        mToastExample = new ToastExample(reactContext);
        modules.add(mToastExample);
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
