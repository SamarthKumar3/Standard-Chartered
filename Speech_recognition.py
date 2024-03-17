import numpy as np
import librosa
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Activation, Flatten
from tensorflow.keras.utils import to_categorical

# Define paths to your dataset here
audio_files = ['path/to/audio1.wav', 'path/to/audio2.wav', ...]  # Add your paths
labels = [0, 1, ...]  # Labels for each audio file

# Function to extract MFCC features from audio
def extract_features(file_name):
    try:
        audio, sample_rate = librosa.load(file_name, res_type='kaiser_fast')
        mfccs = librosa.feature.mfcc(y=audio, sr=sample_rate, n_mfcc=40)
        mfccs_processed = np.mean(mfccs.T, axis=0)
    except Exception as e:
        print("Error encountered while parsing file: ", file_name)
        return None
    return mfccs_processed

# Preprocess the dataset
features = np.array([extract_features(file) for file in audio_files])
labels = to_categorical(np.array(labels))  # One-hot encode labels

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(features, labels, test_size=0.2, random_state=42)

# Building the model
model = Sequential([
    Dense(256, input_shape=(40,)),
    Activation('relu'),
    Dropout(0.5),
    Dense(256),
    Activation('relu'),
    Dropout(0.5),
    Dense(len(labels[0])),  # Output layer nodes = number of labels
    Activation('softmax')
])

# Compile the model
model.compile(loss='categorical_crossentropy', metrics=['accuracy'], optimizer='adam')

# Train the model
model.fit(X_train, y_train, batch_size=32, epochs=50, validation_data=(X_test, y_test), verbose=1)

# Function to predict the label of a new audio file
def predict_audio(file_path):
    feature = extract_features(file_path)
    feature = np.array([feature])
    prediction = model.predict(feature)
    predicted_class = np.argmax(prediction)
    print("Predicted class:", predicted_class)
    return predicted_class

# Example usage
# Replace 'path/to/new_audio_file.wav' with the actual file path you want to predict
predict_audio('path/to/new_audio_file.wav')
