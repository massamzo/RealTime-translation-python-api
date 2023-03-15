from googletrans import Translator

tr = Translator()

#out = tr.translate("Translate is a simple but powerful translation tool written in python with with support for multiple translation providers. By now we offer integration with Microsoft Translation API, Translated MyMemory API, LibreTranslate, and DeepL’s free and pro APIs", src='en', dest='it')

def translate(text, src1, dest1):
    res = tr.translate(text, src=src1, dest=dest1)
    return res.text
