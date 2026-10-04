# Joe’s iOS Builds

KravaSigner source for locally built OpenNOW, VoidLink, and ChargeLens IPAs.

Add this source in KravaSigner:

```text
https://raw.githubusercontent.com/joemossjr16/ios-apps/main/repo.json
```

The feed follows the flat JSON format used by the CyPwn website’s KravaSigner link. Downloads are unsigned and are signed by the installer. No provisioning profiles or signing certificates are published.

## Builds

- **ChargeLens 1.1 (2), iPhone and iPad** — live charging watts, graphs, saved sessions and CSV export. Correct device-specific sensor labels and a wider iPad landscape layout. Requires iOS/iPadOS 26+. Unsigned IPA; 26 tests passed on each simulator. [Download IPA](https://github.com/joemossjr16/ios-apps/releases/download/chargelens-1.1/ChargeLens-1.1-unsigned.ipa) · [Release and source](https://github.com/joemossjr16/ios-apps/releases/tag/chargelens-1.1).
- **ChargeLens for Mac 1.0** — native SwiftUI app for the Mac’s own charging telemetry and a connected iPhone over USB, with a menu bar readout, graphs, saved sessions and CSV export. Universal Apple silicon/Intel app; requires macOS 15+. Ad-hoc signed, not notarized. 47 tests passed; Mac readings tested on real hardware. Physical USB iPhone readings still need verification. [Download Mac ZIP](https://github.com/joemossjr16/ios-apps/releases/download/chargelens-1.1/ChargeLens-Mac-1.0-universal.zip).
- **OpenNOW Metal 4 (Experimental) 1.1.146 (146)** — fixes short controller taps and persists live MetalFX changes. Frame generation is removed; adds packet-loss/jitter diagnostics and a compatible-Metal comparison for 10-bit 4:4:4 HDR. Motion block artifacts remain under investigation. Unsigned optimized Release build; 183 parity tests passed, zero failures, one hardware skip. [Release and source](https://github.com/joemossjr16/ios-apps/releases/tag/opennow-metal4-146)
- **VoidLink PyroWave 0.0.1 (9)** — mouse capture forwarding, visible Windows DPI setting, full-device resolution and PyroWave integration. This unsigned distribution copy has the original signing data removed; the app executable code and version are retained. [Release](https://github.com/joemossjr16/ios-apps/releases/tag/voidlink-9)

## Home Screen game icons

Open a game’s details in OpenNOW, select its store, then tap **Add to Home Screen**. The setup page opens in your default browser and stays open while you save it. In **Safari**, tap **Share → Add to Home Screen** and confirm the game name/icon. Use Safari for this step if another browser is your default. Tap the saved icon to open the game launch page and hand off to OpenNOW. iOS may require an Open confirmation or the page’s **Open in OpenNOW** button. The game must remain available to your NVIDIA account. Launch pages run on [GitHub Pages](https://joemossjr16.github.io/ios-apps/launch/); their source is in `launch/`.

## Sources and licenses

ChargeLens has an original SwiftUI interface and local recording/history implementation. Private ABI signatures and sensor mappings were informed by [Greg Wilson’s ios-charging-monitor](https://github.com/gregsramblings/ios-charging-monitor); its MIT notice is in `licenses/ChargeLens-third-party-notices.md` and the release assets. No third-party runtime library is bundled.

OpenNOW is based on [OpenCloudGaming/OpenNOW](https://github.com/OpenCloudGaming/OpenNOW/tree/kief5555/ios), baseline `95c0f58d42eeed176edd677f604b193c85169d9e`. Its release includes the local patch and build notes. MIT and bundled WebRTC notices are in `licenses/`. Build 127 also adapts protocol modules from [OpenCloudGaming/OpenNOW-Mac](https://github.com/OpenCloudGaming/OpenNOW-Mac/tree/619abf5d831ed382efc070bc519f8c12dda714d4), with pinned OpenSSL and usrsctp static libraries. Their licenses are included in `licenses/`, the IPA and the native library archive. The release includes the cumulative source patch, library archive, reproducible builder and build notes.

VoidLink is based on [joemossjr16/VoidLink-previously-moonlight-zwm](https://github.com/joemossjr16/VoidLink-previously-moonlight-zwm), with upstream [The-Fried-Fish/VoidLink-previously-moonlight-zwm](https://github.com/The-Fried-Fish/VoidLink-previously-moonlight-zwm). Its release includes the local app source snapshot, build scripts and pinned submodule contents. See the GPL license in `licenses/` and dependency notices in the source archive. From the extracted source, run `bash BuildScripts/build-ios-local.sh` with full Xcode installed to build without signing.

## Updating this feed

Upload a new IPA as a release asset, then update its entry in `repo.json`: version, buildVersion, versionDate, downloadURL and size in bytes. Keep bundleIdentifier stable and make metadata match the IPA. The feed does not establish automatic background installation; that depends on KravaSigner. Build-number-only update detection also needs testing; increment the app marketing version for future releases if the installed signer only compares version.

The main source now offers the current experimental OpenNOW Metal 4 build. Metal 4 builds also have a separate [KravaSigner source](https://raw.githubusercontent.com/joemossjr16/ios-apps/main/metal-4.json). Current build: [OpenNOW Metal 4 1.1.146](https://github.com/joemossjr16/ios-apps/releases/tag/opennow-metal4-146). This optimized Release build fixes quick virtual-controller taps, increases A/B/X/Y touch targets and persists live MetalFX changes. Adds packet-loss/jitter logging and a diagnostic compatible-Metal launch override that retains the requested 10-bit 4:4:4 HDR stream. Frame generation remains removed and the build-145 Settings navigation fix remains. Validation: 183 parity tests passed, zero failures, one hardware skip, including iPad-sidebar and iPhone-tab-bar navigation; Release build passed. Motion block artifacts and physical-device fix verification remain pending. Native dependencies and Metal shaders are unchanged. The release includes the unsigned IPA, cumulative source patch, native dependencies, detailed notes and checksums.
