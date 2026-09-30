# Joe’s iOS Builds

KravaSigner source for locally built OpenNOW and VoidLink IPAs.

Add this source in KravaSigner:

```text
https://raw.githubusercontent.com/joemossjr16/ios-apps/main/repo.json
```

The feed follows the flat JSON format used by the CyPwn website’s KravaSigner link. Downloads are unsigned and are signed by the installer. No provisioning profiles or signing certificates are published.

## Builds

- **OpenNOW Debug 1.1.111 (111)** — hardware AV1 and 10-bit HDR test build. Corrected 10-bit session requests and added 10-bit PQ/HLG display output. iOS device build, seven targeted simulator tests, and hardware decode/HDR Metal samples on an Apple M5 Mac passed. Live iPhone HDR and thermal behavior still need testing. [Release](https://github.com/joemossjr16/ios-apps/releases/tag/opennow-111)
- **VoidLink PyroWave 0.0.1 (9)** — mouse capture forwarding, visible Windows DPI setting, full-device resolution and PyroWave integration. This unsigned distribution copy has the original signing data removed; the app executable code and version are retained. [Release](https://github.com/joemossjr16/ios-apps/releases/tag/voidlink-9)

## Sources and licenses

OpenNOW is based on [OpenCloudGaming/OpenNOW](https://github.com/OpenCloudGaming/OpenNOW/tree/kief5555/ios), baseline `95c0f58d42eeed176edd677f604b193c85169d9e`. Its release includes the local patch and build notes. MIT and bundled WebRTC notices are in `licenses/`.

VoidLink is based on [joemossjr16/VoidLink-previously-moonlight-zwm](https://github.com/joemossjr16/VoidLink-previously-moonlight-zwm), with upstream [The-Fried-Fish/VoidLink-previously-moonlight-zwm](https://github.com/The-Fried-Fish/VoidLink-previously-moonlight-zwm). Its release includes the local app source snapshot, build scripts and pinned submodule contents. See the GPL license in `licenses/` and dependency notices in the source archive. From the extracted source, run `bash BuildScripts/build-ios-local.sh` with full Xcode installed to build without signing.

## Updating this feed

Upload a new IPA as a release asset, then update its entry in `repo.json`: version, buildVersion, versionDate, downloadURL and size in bytes. Keep bundleIdentifier stable and make metadata match the IPA. The feed does not establish automatic background installation; that depends on KravaSigner. Build-number-only update detection also needs testing; increment the app marketing version for future releases if the installed signer only compares version.
