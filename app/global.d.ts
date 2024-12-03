// Declare the type for window.documentPictureInPicture
export declare global {
  interface Window {
    documentPictureInPicture: {
      requestWindow(options: {
        width: number;
        height: number;
        disallowReturnToOpener: boolean;
        preferInitialWindowPlacement: boolean;
      }): Promise<Window>;
    };
  }
}
