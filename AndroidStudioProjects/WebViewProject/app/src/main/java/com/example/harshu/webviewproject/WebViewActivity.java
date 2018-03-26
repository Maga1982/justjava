package com.example.harshu.webviewproject;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.support.v7.app.AppCompatActivity;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.TextView;

import java.util.Locale;

public class WebViewActivity extends AppCompatActivity {

    TextToSpeech textspeech_obj;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.weblayout1);

        Intent intent = getIntent();

        WebView webView = (WebView) findViewById(R.id.webid);

        TextView contentView = (TextView) findViewById(R.id.textid);

        textspeech_obj = new TextToSpeech(getApplicationContext(), new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {
                if (status != TextToSpeech.ERROR) {
                    textspeech_obj.setLanguage(Locale.US);
                }
            }
        });



        /* An instance of this class will be registered as a JavaScript interface */
        class MyJavaScriptInterface {
            private TextView contentView;

            public MyJavaScriptInterface(TextView aContentView) {
                contentView = aContentView;
            }

            @SuppressWarnings("unused")

            @JavascriptInterface
            public void processContent(String aContent) {
                final String content = aContent;
                contentView.post(new Runnable() {
                    public void run() {
                        // contentView.setText(content);

                        textspeech_obj.speak(content, TextToSpeech.QUEUE_FLUSH, null);
                    }
                });
            }
        }

        webView.getSettings().setJavaScriptEnabled(true);
        webView.addJavascriptInterface(new MyJavaScriptInterface(contentView), "INTERFACE");
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                view.loadUrl("javascript:window.INTERFACE.processContent(document.getElementsByTagName('body')[0].innerText);");
            }
        });

        webView.loadUrl("http://dailypanel.org/article/20150310sae");
    }

    public void onPause() {
        if (textspeech_obj != null) {
            textspeech_obj.stop();
            textspeech_obj.shutdown();
        }
        super.onPause();
    }
}


