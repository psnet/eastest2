EAS cli build bug demo #2 (with fonts)
===

With **EAS build** on android when press "back" button and open app again **quickly will be visible splash (loading) screen**, but on **classic expo build** there is **no splash screen on app reopening** (apps are not really closed in both cases).

Envs
---

SDK: 43 (also same problem in SDK 42)

EAS cli: 0.37

EXPO cli: 4.13.0 (with older versions was the same)

Code
---

Example based on new typescript demo from `expo init`. In code there is nothing special, it only using `expo-font` module with `useFonts` hook to preload 5 fonts from `@expo-google-fonts` module.

5 fonts added for better visible effect when starting app.

Reproduce bug
===

To have two versions of apps (with expo build and EAS build) on same device and switch between them need to do 2 changes in `app.json` file.

EXPO classic build
---

Just run `expo build:android`, choose type `apk` to build.

EAS build
---

Change in `app.json`:

- App name (line #3):
```json
    "name": "eastest2 EXPO",
```
to
```json
    "name": "eastest2 EAS",
```
- App package name (line #29):
```json
      "package": "com.eastestnew.build.expo",
```
to
```json
      "package": "com.eastestnew.build.eas",
```

Then run `eas build --platform android --profile development`

Install these APKs on device and test "back" button behavior: you will see that **app created via EAS build will show splash screen on every app reopening where classic build - not**.

Video (slowed 2 times)
---

https://www.youtube.com/watch?v=rkgFkDZVcEo
