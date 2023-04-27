import * as Sharing from 'expo-sharing';

var options = {
  /**
   * Sets `mimeType` for `Intent` *(Android only)*
   */
  mimeType: '',
  /**
   * ([Uniform Type Identifier](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_conc/understand_utis_conc.html))
   * the type of the target file *(iOS only)*
   */
  UTI:'',
  /**
   * Sets share dialog title *(Android and Web only)*
   */
  dialogTitle = 'Freelancing or Gig app'
};

/**
 * Determine if the sharing API can be used in this app.
 * @return A promise that fulfills with `true` if the sharing API can be used, and `false` otherwise.
 */
export async function isAvailableAsync() {
  if (Sharing) {
    if (Sharing.isAvailableAsync) {
      return await Sharing.isAvailableAsync();
    }
    return true;
  }

  return false;
}

/**
 * Opens action sheet to share file to different applications which can handle this type of file.
 * @param url Local file URL to share.
 * @param options A map of share options.
 */
export async function shareAsync(url,options = {}){
  if (!Sharing || !Sharing.shareAsync) {
    throw new Error('Sharing', 'shareAsync');
  }
  return await Sharing.shareAsync(url, options);
}