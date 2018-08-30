package com.myreactnativeproject.adapter;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import com.myreactnativeproject.R;

import butterknife.BindView;
import butterknife.ButterKnife;

public class ItemAdapter extends RecyclerView.Adapter<ItemAdapter.ItemViewHolder> {
    private Context mContext;
    private String[] data;
    private OnItemClickListener mListener;

    public ItemAdapter(Context context, String[] data) {
        mContext = context;
        this.data = data;
    }

    public interface OnItemClickListener {
        void onItemClick(int position);
    }

    public void setListener(OnItemClickListener listener) {
        mListener = listener;
    }

    @NonNull
    @Override
    public ItemViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(mContext).inflate(R.layout.item_layout, parent, false);
        return new ItemViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ItemViewHolder holder, final int position) {
        holder.btnText.setText(data[position]);
        holder.btnText.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (mListener != null)
                    mListener.onItemClick(position);
            }
        });
    }

    @Override
    public int getItemCount() {
        return data.length;
    }

    static class ItemViewHolder extends RecyclerView.ViewHolder{
        @BindView(R.id.btn_text)
        Button btnText;

        ItemViewHolder(View view) {
            super(view);
            ButterKnife.bind(this, view);
        }
    }
}
