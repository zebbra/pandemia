import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({
  name: "ConferenceStatus",
  namespaced: true,
  stateFactory: true,
})
export default class ConferenceStatus extends VuexModule {
  public status: {
    isJoined: boolean;
    isSpeaker: boolean;
    id: string;
    displayName: string;
    roomName: string;
    localAudioLevel: number;
    micMuted: boolean;
    camMuted: boolean;
    isSharing: boolean;
    error: boolean;
    errorMsg: string;
    errorResolution: string;
  } = {
    isJoined: false,
    isSpeaker: false,
    id: "",
    displayName: "",
    roomName: "",
    localAudioLevel: 0,
    micMuted: false,
    camMuted: false,
    isSharing: false,
    error: false,
    errorMsg: "",
    errorResolution: "",
  };

  public devices: {
    cameraId: string;
    micId: string;
    outputId: string;
    outputDevices: Array<any>;
    microphoneDevices: Array<any>;
    cameraDevices: Array<any>;
  } = {
    cameraId: "",
    micId: "",
    outputId: "",
    outputDevices: [],
    microphoneDevices: [],
    cameraDevices: [],
  };

  public mutedTracks: Array<any> = [];
  public devicePremissionPromptShown: string = "";
  public deviceSettingsVisible: boolean = false;
  public setupVisible: boolean = false;

  // -------outputDevices-------
  @Mutation
  setOutputDevices(deviceList: Array<any>) {
    this.devices.outputDevices = deviceList;
  }

  @Action
  updateOutputDevices(deviceList: Array<any>) {
    this.setOutputDevices(deviceList);
  }

  // -------microphoneDevices-------
  @Mutation
  setMicrophoneDevices(deviceList: Array<any>) {
    this.devices.microphoneDevices = deviceList;
  }

  @Action
  updateMicrophoneDevices(deviceList: Array<any>) {
    this.setMicrophoneDevices(deviceList);
  }

  // -------cameraDevices-------
  @Mutation
  setCameraDevices(deviceList: Array<any>) {
    this.devices.cameraDevices = deviceList;
  }

  @Action
  updateCameraDevices(deviceList: Array<any>) {
    this.setCameraDevices(deviceList);
  }

  // -------DEVICES-------

  @Mutation
  setCamera(id: string) {
    this.devices.cameraId = id;
  }

  @Mutation
  setMic(id: string) {
    this.devices.micId = id;
  }

  @Mutation
  setOutput(id: string) {
    this.devices.outputId = id;
  }

  @Action
  updateCameraId(id: string) {
    this.setCamera(id);
  }

  @Action
  updateMicId(id: string) {
    this.setMic(id);
  }

  @Action
  updateOuputId(id: string) {
    this.setOutput(id);
  }

  // -------STATUS-------

  @Mutation
  setJoined(isJoined: boolean) {
    this.status.isJoined = isJoined;
  }

  @Mutation
  setIsSpeaker(isSpeaker: boolean) {
    this.status.isSpeaker = isSpeaker;
  }

  @Mutation
  setId(id: string) {
    this.status.id = id;
  }

  @Mutation
  setDisplayName(displayName: string) {
    this.status.displayName = displayName;
  }

  @Mutation
  setRoomName(roomName: string) {
    this.status.roomName = roomName;
  }

  @Mutation
  setLocalAudioLevel(level: number) {
    this.status.localAudioLevel = level;
  }

  @Action
  updateJoined(joined: boolean) {
    this.setJoined(joined);
  }

  @Action
  updateIsSpeaker(isSpeaker: boolean) {
    this.setIsSpeaker(isSpeaker);
  }

  @Action
  updateId(text: string) {
    this.setId(text);
  }

  @Action
  updateDisplayName(text: string) {
    this.setDisplayName(text);
  }

  @Action
  updateRoomName(roomName: string) {
    this.setRoomName(roomName);
  }

  @Action
  updateLocalAudioLevel(level: number) {
    this.setLocalAudioLevel(level);
  }

  // ------status.error---------
  @Mutation
  setError(flag: boolean) {
    this.status.error = flag;
  }

  @Action
  updateErrorFlag(flag: boolean) {
    this.setError(flag);
  }

  // ------status.errorMsg---------

  @Mutation
  setErrorMsg(msg: string) {
    this.status.errorMsg = msg;
  }

  @Action
  updateErrorMsg(msg: string) {
    this.setErrorMsg(msg);
  }

  // ------status.errorResolution---------

  @Mutation
  setErrorResolution(msg: string) {
    this.status.errorResolution = msg;
  }

  @Action
  updateErrorResolution(msg: string) {
    this.setErrorResolution(msg);
  }
  // ------MIC MUTED---------

  @Mutation
  setMicMuted(status: boolean) {
    this.status.micMuted = status;
  }

  @Action
  updateMicMuted(status: boolean) {
    this.setMicMuted(status);
  }

  // ------CAM MUTED---------

  @Mutation
  setCamMuted(status: boolean) {
    this.status.camMuted = status;
  }

  @Action
  updateCamMuted(status: boolean) {
    this.setCamMuted(status);
  }

  // ------SHARING---------
  @Mutation
  setIsSharing(status: boolean) {
    this.status.isSharing = status;
  }

  @Action
  updateIsSharing(status: boolean) {
    this.setIsSharing(status);
  }

  // ------SETUP/SETTINGS---------

  @Mutation
  setDeviceSettingsVisible(state: boolean) {
    this.deviceSettingsVisible = state;
  }

  @Mutation
  setSetupVisible(state: boolean) {
    this.setupVisible = state;
  }

  @Action
  showDeviceSettings(state: boolean) {
    this.setDeviceSettingsVisible(state);
  }

  @Action
  showSetup(state: boolean) {
    this.setSetupVisible(state);
  }

  @Mutation
  setDevicePremissionPromptShown(type: string) {
    this.devicePremissionPromptShown = type;
  }

  @Action
  premissionPromptShown(type: string) {
    this.setDevicePremissionPromptShown(type);
  }

  // ------MUTED TRACKS---------

  @Mutation
  addMutedTrack(id: any) {
    this.mutedTracks.push(id);
  }

  @Mutation
  removeMutedTrack(id: any) {
    const idx = this.mutedTracks.indexOf(id);
    this.mutedTracks.splice(idx, 1);
  }

  @Action
  updateMutedTracks(id: any) {
    if (this.mutedTracks.includes(id)) {
      this.removeMutedTrack(id);
    } else {
      this.addMutedTrack(id);
    }
  }
}
