# Joe’s iOS Builds

KravaSigner source for locally built OpenNOW and VoidLink IPAs.

Add this source in KravaSigner:

```text
https://raw.githubusercontent.com/joemossjr16/ios-apps/main/repo.json
```

The feed follows the flat JSON format used by the CyPwn website’s KravaSigner link. Downloads are unsigned and are signed by the installer. No provisioning profiles or signing certificates are published.

## Builds

- **OpenNOW Debug 1.1.136 (136)** — separate Performance / Native frame-generation quality, reduced generated-frame processing size for 8-bit 4:2:0 and persistent MetalFX pipelines. Real frames and host stream settings retained. Measured generated/displayed FPS; physical-device retest needed. Unsigned build, 184 tests and SDR/PQ GPU checks passed; one simulator skip. [Release](https://github.com/joemossjr16/ios-apps/releases/tag/opennow-136) · [Source](https://github.com/joemossjr16/OpenNOW/tree/ios/native-nvst-128)
- **VoidLink PyroWave 0.0.1 (9)** — mouse capture forwarding, visible Windows DPI setting, full-device resolution and PyroWave integration. This unsigned distribution copy has the original signing data removed; the app executable code and version are retained. [Release](https://github.com/joemossjr16/ios-apps/releases/tag/voidlink-9)

## Home Screen game icons

Open a game’s details in OpenNOW, select its store, then tap **Add to Home Screen**. The setup page opens in your default browser and stays open while you save it. In **Safari**, tap **Share → Add to Home Screen** and confirm the game name/icon. Use Safari for this step if another browser is your default. Tap the saved icon to open the game launch page and hand off to OpenNOW. iOS may require an Open confirmation or the page’s **Open in OpenNOW** button. The game must remain available to your NVIDIA account. Launch pages run on [GitHub Pages](https://joemossjr16.github.io/ios-apps/launch/); their source is in `launch/`.

## Sources and licenses

OpenNOW is based on [OpenCloudGaming/OpenNOW](https://github.com/OpenCloudGaming/OpenNOW/tree/kief5555/ios), baseline `95c0f58d42eeed176edd677f604b193c85169d9e`. Its release includes the local patch and build notes. MIT and bundled WebRTC notices are in `licenses/`. Build 127 also adapts protocol modules from [OpenCloudGaming/OpenNOW-Mac](https://github.com/OpenCloudGaming/OpenNOW-Mac/tree/619abf5d831ed382efc070bc519f8c12dda714d4), with pinned OpenSSL and usrsctp static libraries. Their licenses are included in `licenses/`, the IPA and the native library archive. The release includes the cumulative source patch, library archive, reproducible builder and build notes.

VoidLink is based on [joemossjr16/VoidLink-previously-moonlight-zwm](https://github.com/joemossjr16/VoidLink-previously-moonlight-zwm), with upstream [The-Fried-Fish/VoidLink-previously-moonlight-zwm](https://github.com/The-Fried-Fish/VoidLink-previously-moonlight-zwm). Its release includes the local app source snapshot, build scripts and pinned submodule contents. See the GPL license in `licenses/` and dependency notices in the source archive. From the extracted source, run `bash BuildScripts/build-ios-local.sh` with full Xcode installed to build without signing.

## Updating this feed

Upload a new IPA as a release asset, then update its entry in `repo.json`: version, buildVersion, versionDate, downloadURL and size in bytes. Keep bundleIdentifier stable and make metadata match the IPA. The feed does not establish automatic background installation; that depends on KravaSigner. Build-number-only update detection also needs testing; increment the app marketing version for future releases if the installed signer only compares version.
