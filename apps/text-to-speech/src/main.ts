import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import * as fs from "fs";
import * as path from "path";

async function textToSpeech() {
  const speechConfig = sdk.SpeechConfig.fromSubscription(
    process.env.SPEECH_KEY,
    process.env.SPEECH_REGION
  );
  speechConfig.speechSynthesisVoiceName = "en-US-DavisNeural";
  //   speechConfig.requestWordLevelTimestamps
  //   speechConfig.speechSynthesisLanguage = "en-US";

  const synthesizer = new sdk.SpeechSynthesizer(speechConfig, undefined);

  const sciprFileName = "script-ssml.txt";

  const filePath = path.join(
    process.env.HOME,
    "Downloads",
    "fhl-demo",
    sciprFileName
  );
  const text = fs.readFileSync(filePath, "utf-8");
  synthesizer.speakSsmlAsync(text, (result) => {
    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
      const audio = result.audioData;
      const outputAudioFilePath = path.join(
        process.env.HOME,
        "Downloads",
        "fhl-demo",
        "audio.wav"
      );
      const audioView = new Uint8Array(audio);
      fs.writeFile(outputAudioFilePath, audioView, (error) => {
        if (error) {
          console.error(`Error writing audio file: ${error}`);
        } else {
          console.log(`Audio file saved to ${outputAudioFilePath}`);
        }
      });
    } else if (result.reason === sdk.ResultReason.Canceled) {
      const cancellation = sdk.CancellationDetails.fromResult(result);
      console.error(`Speech synthesis canceled: ${cancellation.errorDetails}`);
    }
    synthesizer.close();
  });
}

textToSpeech();
