# Joe’s iOS Builds

KravaSigner source for locally built OpenNOW, VoidLink, ChargeLens, and Husk IPAs.

Add this source in KravaSigner:

```text
https://raw.githubusercontent.com/joemossjr16/ios-apps/main/repo.json
```

The feed follows the flat JSON format used by the CyPwn website’s KravaSigner link. Downloads are unsigned and are signed by the installer. No provisioning profiles or signing certificates are published.

## Builds

- **Husk 0.6.1 (10), iPhone and iPad** — adds iPad support to the app and JIT helper, including all four iPad orientations; existing adaptive screens reflow for iPad. Runs Android apps through a local QEMU-based environment. Requires JIT enabled by a compatible signing/installation tool. Unsigned IPA built from [Leviidev/Husk](https://github.com/Leviidev/Husk) commit `65d0d122a139fa7ed53db6df84ed6737e3216d29`. [Download IPA](https://github.com/joemossjr16/ios-apps/releases/download/husk-0.6.1-ipad/Husk-0.6.1-build10-iPad.ipa) · [Release and source](https://github.com/joemossjr16/ios-apps/releases/tag/husk-0.6.1-ipad).
- **ChargeLens 1.1 (2), iPhone and iPad** — live charging watts, graphs, saved sessions and CSV export. Correct device-specific sensor labels and a wider iPad landscape layout. Requires iOS/iPadOS 26+. Unsigned IPA; 26 tests passed on each simulator. [Download IPA](https://github.com/joemossjr16/ios-apps/releases/download/chargelens-1.1/ChargeLens-1.1-unsigned.ipa) · [Release and source](https://github.com/joemossjr16/ios-apps/releases/tag/chargelens-1.1).
- **ChargeLens for Mac 1.0** — native SwiftUI app for the Mac’s own charging telemetry and a connected iPhone over USB, with a menu bar readout, graphs, saved sessions and CSV export. Universal Apple silicon/Intel app; requires macOS 15+. Ad-hoc signed, not notarized. 47 tests passed; Mac readings tested on real hardware. Physical USB iPhone readings still need verification. [Download Mac ZIP](https://github.com/joemossjr16/ios-apps/releases/download/chargelens-1.1/ChargeLens-Mac-1.0-universal.zip).
- **OpenNOW 1.1.159 (159), game rumble diagnostics** — Raises the live controller rumble maximum to 64× gain: the previous 48× maximum is now 75%, with saved gain preserved. Adds two learnable controller shortcuts for Stream HUD or Toggle stats in Settings and stream controls. HUD navigation uses D-pad/left stick, A to select, B to go back, and left/right to adjust selected sliders. Game input is neutral while the HUD is open; held inputs are gated until release after closing. Back-button learning uses inputs actually exposed by iOS: if a back button mirrors a front button, the shortcut affects both. Configure an unused input in GameSir for a dedicated shortcut if needed. GameSir motor output remains on the physically confirmed ExternalAccessory transport; phone fallback is separate. No audio-driven haptics in this build. Physical back-button/HUD testing is still required. Release build and 341 automated tests pass; one hardware test is skipped. Unsigned IPA for installer signing. [Release and source](https://github.com/joemossjr16/ios-apps/releases/tag/opennow-rumble-159)
- **VoidLink PyroWave 0.0.1 (9)** — mouse capture forwarding, visible Windows DPI setting, full-device resolution and PyroWave integration. This unsigned distribution copy has the original signing data removed; the app executable code and version are retained. [Release](https://github.com/joemossjr16/ios-apps/releases/tag/voidlink-9)

## Home Screen game icons

Open a game’s details in OpenNOW, select its store, then tap **Add to Home Screen**. The setup page opens in your default browser and stays open while you save it. In **Safari**, tap **Share → Add to Home Screen** and confirm the game name/icon. Use Safari for this step if another browser is your default. Tap the saved icon to open the game launch page and hand off to OpenNOW. iOS may require an Open confirmation or the page’s **Open in OpenNOW** button. The game must remain available to your NVIDIA account. Launch pages run on [GitHub Pages](https://joemossjr16.github.io/ios-apps/launch/); their source is in `launch/`.

## Sources and licenses

ChargeLens has an original SwiftUI interface and local recording/history implementation. Private ABI signatures and sensor mappings were informed by [Greg Wilson’s ios-charging-monitor](https://github.com/gregsramblings/ios-charging-monitor); its MIT notice is in `licenses/ChargeLens-third-party-notices.md` and the release assets. No third-party runtime library is bundled.

OpenNOW is based on [OpenCloudGaming/OpenNOW](https://github.com/OpenCloudGaming/OpenNOW/tree/kief5555/ios), baseline `95c0f58d42eeed176edd677f604b193c85169d9e`. Its release includes the local patch and build notes. MIT and bundled WebRTC notices are in `licenses/`. Build 127 also adapts protocol modules from [OpenCloudGaming/OpenNOW-Mac](https://github.com/OpenCloudGaming/OpenNOW-Mac/tree/619abf5d831ed382efc070bc519f8c12dda714d4), with pinned OpenSSL and usrsctp static libraries. Their licenses are included in `licenses/`, the IPA and the native library archive. The release includes the cumulative source patch, library archive, reproducible builder and build notes.

Husk is based on [Leviidev/Husk](https://github.com/Leviidev/Husk), commit `65d0d122a139fa7ed53db6df84ed6737e3216d29`. It is licensed GPL-2.0-or-later; consult the upstream repository for its license and third-party notices.

VoidLink is based on [joemossjr16/VoidLink-previously-moonlight-zwm](https://github.com/joemossjr16/VoidLink-previously-moonlight-zwm), with upstream [The-Fried-Fish/VoidLink-previously-moonlight-zwm](https://github.com/The-Fried-Fish/VoidLink-previously-moonlight-zwm). Its release includes the local app source snapshot, build scripts and pinned submodule contents. See the GPL license in `licenses/` and dependency notices in the source archive. From the extracted source, run `bash BuildScripts/build-ios-local.sh` with full Xcode installed to build without signing.

## Updating this feed

Upload a new IPA as a release asset, then update its entry in `repo.json`: version, buildVersion, versionDate, downloadURL and size in bytes. Keep bundleIdentifier stable and make metadata match the IPA. The feed does not establish automatic background installation; that depends on KravaSigner. Build-number-only update detection also needs testing; increment the app marketing version for future releases if the installed signer only compares version.

The main source and separate Metal 4 source currently offer [OpenNOW 1.1.159](https://github.com/joemossjr16/ios-apps/releases/tag/opennow-rumble-159). Raises the live controller rumble maximum to 64× gain: the previous 48× maximum is now 75%, with saved gain preserved. Adds two learnable controller shortcuts for Stream HUD or Toggle stats in Settings and stream controls. HUD navigation uses D-pad/left stick, A to select, B to go back, and left/right to adjust selected sliders. Game input is neutral while the HUD is open; held inputs are gated until release after closing. Back-button learning uses inputs actually exposed by iOS: if a back button mirrors a front button, the shortcut affects both. Configure an unused input in GameSir for a dedicated shortcut if needed. GameSir motor output remains on the physically confirmed ExternalAccessory transport; phone fallback is separate. No audio-driven haptics in this build. Physical back-button/HUD testing is still required. Release build and 341 automated tests pass; one hardware test is skipped. Unsigned IPA for installer signing. [Build 151](https://github.com/joemossjr16/ios-apps/releases/tag/opennow-metal4-151) remains available without the rumble diagnostic panel.

Known working physical iPhone baseline: [build 148](https://github.com/joemossjr16/ios-apps/releases/tag/opennow-metal4-148), with Metal 4 + active MetalFX, HEVC 10-bit 4:4:4 HDR, no blocks and smooth movement at approximately 50 source/display FPS. Build 149 is now verified block-free on the physical iPhone with direct Metal 4, bridge off and active MetalFX. Consistent 120 FPS, separate decoder recovery and iPad verification remain pending.
