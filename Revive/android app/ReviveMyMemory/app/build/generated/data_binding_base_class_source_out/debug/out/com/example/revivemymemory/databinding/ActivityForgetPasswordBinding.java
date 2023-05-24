// Generated by view binder compiler. Do not edit!
package com.example.revivemymemory.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.AppCompatButton;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.airbnb.lottie.LottieAnimationView;
import com.example.revivemymemory.R;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class ActivityForgetPasswordBinding implements ViewBinding {
  @NonNull
  private final ConstraintLayout rootView;

  @NonNull
  public final TextInputLayout emailTil;

  @NonNull
  public final TextInputEditText mEditEmail;

  @NonNull
  public final LottieAnimationView repasslottie;

  @NonNull
  public final AppCompatButton send;

  @NonNull
  public final TextView textView1;

  @NonNull
  public final TextView textView2;

  private ActivityForgetPasswordBinding(@NonNull ConstraintLayout rootView,
      @NonNull TextInputLayout emailTil, @NonNull TextInputEditText mEditEmail,
      @NonNull LottieAnimationView repasslottie, @NonNull AppCompatButton send,
      @NonNull TextView textView1, @NonNull TextView textView2) {
    this.rootView = rootView;
    this.emailTil = emailTil;
    this.mEditEmail = mEditEmail;
    this.repasslottie = repasslottie;
    this.send = send;
    this.textView1 = textView1;
    this.textView2 = textView2;
  }

  @Override
  @NonNull
  public ConstraintLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static ActivityForgetPasswordBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static ActivityForgetPasswordBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.activity_forget_password, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static ActivityForgetPasswordBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.emailTil;
      TextInputLayout emailTil = ViewBindings.findChildViewById(rootView, id);
      if (emailTil == null) {
        break missingId;
      }

      id = R.id.mEditEmail;
      TextInputEditText mEditEmail = ViewBindings.findChildViewById(rootView, id);
      if (mEditEmail == null) {
        break missingId;
      }

      id = R.id.repasslottie;
      LottieAnimationView repasslottie = ViewBindings.findChildViewById(rootView, id);
      if (repasslottie == null) {
        break missingId;
      }

      id = R.id.send;
      AppCompatButton send = ViewBindings.findChildViewById(rootView, id);
      if (send == null) {
        break missingId;
      }

      id = R.id.textView1;
      TextView textView1 = ViewBindings.findChildViewById(rootView, id);
      if (textView1 == null) {
        break missingId;
      }

      id = R.id.textView2;
      TextView textView2 = ViewBindings.findChildViewById(rootView, id);
      if (textView2 == null) {
        break missingId;
      }

      return new ActivityForgetPasswordBinding((ConstraintLayout) rootView, emailTil, mEditEmail,
          repasslottie, send, textView1, textView2);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
